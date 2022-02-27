document.getElementById("mybtn").addEventListener("click",makerequest)


//Tradational Method of feching the Data From The 
/* function makerequest(){
    console.log("Clicked")
    config={
        method:"GET",
        headers:{
            'Content_Type':'application/json'
        },
        url:'data.txt'
    }
    axios(config).then((response)=>{
        console.log(response.data)
    })
}
 */
/* function makerequest(){
    console.log("clickedd")
    axios.get('data.json').then((response)=>{
        console.log(response.data)
        console.log(response.data.name)
        console.log(response.data.Address)
        

    })
} */


/* /// Making the axios Request by using async await
async function makerequest(){
    const request=await axios.get('data.json')
    console.log(request.data)
    console.log(request.data.name)
    console.log(request.data.Address)

}
 */


//Making the axios Reqeuried for the remote api and display the data in the Webpage
/* function makerequest(){
  
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((Response)=>{
        console.log(Response.data)
        console.log(Response.data.id)
        console.log(Response.data.body)
        console.log(Response.data.title)
        document.getElementById("idnum").innerHTML=Response.data.id
        document.getElementById("titleid").innerHTML=Response.data.title
        document.getElementById("bodyid").innerHTML=Response.data.body
    }).catch((err)=>{console.log(err)})
} */


//making the axios request request for the multiplie data
/* function makerequest(){
    const output=document.getElementById("allpost")
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((response)=>{
        console.log(response.data)
        response.data.map((value)=>{
            output.innerHTML+=`<div>ID${value.id}</div>
            <div>title ${value.title}</div>
            <div>body ${value.body}</div><hr>
            `

            

        })
    })
} */

//making the Post Request For the Static Data
/* function makerequest(){
    const config={
        method:"POST",
        url:"https://reqres.in/api/users",
        headers:{
            'Content-Type':'application/json'
        },
        data:'{"name":"Abhi","job":"CEO"}'
    }
    axios(config).then((response)=>{
        console.log(response.data)
    })
} */


/* //Making The Axios Post Request by using Post Shorthand
function makerequest(){
    const config={
        headers:{
            'Content-Type':'application/json'
        },
    }
    axios.post("https://reqres.in/api/users",'{"name":"Abhi","job":"CEO"}',config).then((responce)=>{
        console.log(responce.data)
    })
}
 */
function makerequest(e){
    e.preventDefault()
    const name=document.getElementById("name").value
    const job=document.getElementById("job").value
    const config={
        method:"POST",
        url:"https://reqres.in/api/users",
        headers:{
            'Content-Type':'application/json'
        },
        data:JSON.stringify({name:name,job:job})
    }
    axios(config).then((response)=>{
        console.log(response.data)
    })

}