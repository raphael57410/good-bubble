import { Post } from "../../App";

export async function postNewPost(url = "", newPost: Post) {

    const formData = new FormData();

    formData.append("title", newPost.title);
    formData.append("email", newPost.email);
    formData.append("image", newPost.image);
    formData.append("description", newPost.description);


    const response = await fetch(url, {
        method: "POST",
        body: formData,
    });
    return response;
}