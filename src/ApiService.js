import axios from "axios";

export function adddata(x, y ,z, username) {
    if (x == null) {
        x = 0.01
    }
    if (y == null) {
        y = 0.01
    }
    if (z == null) {    
        z = 0.01
    }
    if (username == null) { 
        username = "XXXX"
    }

    return axios.post('http://localhost:8000/accel/data/',
    {   
        id: null,
        x_accel: x,
        y_accel: y,
        z_accel: z,
        user_name: username,
        create_at: null,
    })
    .then(res => {
        return res.data
    })}

export function getdata(username) {  
    const url = `http://localhost:8000/accel/userdata/?username=${username}`;
    return axios.get(url)
    .then(res => {
        return res.data
    })}

export function loginuser(username) {  
    console.log('Apiservice username', username)
    const url = `http://localhost:8000/accel/login/?username=${username}`;
    console.log('url', url)
    return axios.get(url)
    .then(res => {
        console.log('res', res.data)
        return res.data
    })}