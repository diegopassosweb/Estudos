import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import {ref, listAll, getDownloadURL, uploadBytes} from "firebase/storage";
import {v4 as createId} from "uuid";
import { PhotoItem } from "../components/PhotoItem";

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "gallery");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl,
        });
    }

    return list;
}

export const insert = async (file: File) => {
    if(["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
       
        let randomName = createId();
        let newFile = ref(storage, `gallery/${randomName}`)
        
        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return {
            name: upload.ref.name,
            url: photoUrl
        } as Photo;
        
    } else {
        return new Error("Erro tipo de arquivo nao permitido")
    }
}