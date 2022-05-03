import axios from "axios";

axios.defaults.baseURL = 'https://626fed34c508beec488c55b4.mockapi.io';


export const getContacts = async () => {
    const {data} = await axios.get('/contacts');
    return data;
}

export const deleteContact = async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`, {
        method: "DELETE",
       
    });
     return data;
}

export const addContact = async (contact) => {
    const { data } = await axios.post(`/contacts`, contact);
     return data;
}





