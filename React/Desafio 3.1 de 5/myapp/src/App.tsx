
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { useState, useEffect, FormEvent } from "react";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";
import { upload } from "@testing-library/user-event/dist/upload";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  },[]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadingForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadingForm>

        {loading && 
        <C.ScreenWarning>
        <div className="emoji">{";)"}</div>
        <div>Carregando...</div>  
        </C.ScreenWarning>}

        {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item, index) => (
            <PhotoItem key={index} url={item.url} name={item.name}/>
          ))}
        </C.PhotoList>
        }

        {!loading && photos.length === 0 && 
        <C.ScreenWarning>
        <div className="emoji">{":("}</div>
        <div>Não ha fotos cadastradas...</div>  
        </C.ScreenWarning>
        }
        
      </C.Area>
    </C.Container>
  )
}

export default App;