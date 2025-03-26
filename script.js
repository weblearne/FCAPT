function login(event){
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    event.preventDefault();
    
    if(gmail === "user@gmail.com" && password === "user123"){
        window.location.href="user_dashboard.html"
    }else if(gmail === "admin@gmail.com" && password === "admin123"){
        window.location.href="admin.html"
    }else{
        window.location.href="index.html"
}
    


}