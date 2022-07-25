<template>
     <!-- Formulaire de connection -->
        <div class="signupContainer">
           
            <h2>Connectez-vous !</h2>
            <form v-on:submit.prevent="login" id="form-login" >
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required v-model="inputLogin.email"/>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required v-model="inputLogin.password"/>
              </div>   
              <button type="submit">Me voilà !!! 🤪</button>                                     
            </form> 
              <!--renvoie au formulaire d'inscription  -->
             <nav class="navlogsign"><p>Pas encore inscrit ? <router-link to="/signup">Rejoignez-nous !</router-link></p></nav>
        </div>  
</template>


<script>

export default {
    name: 'LogIn',

    data() {
        return {
            inputLogin: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            let loginDatas = {
                "email": this.inputLogin.email,
                "password": this.inputLogin.password
            }
            console.log(loginDatas)
            let url = "http://localhost:3000/api/user/login"
            let options = {
                method: "POST",
                body: JSON.stringify(loginDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    if (res.userId && res.token) {
                        sessionStorage.setItem("userId", res.userId)
                        sessionStorage.setItem("token", res.token)
                        sessionStorage.setItem("isAdmin", res.isAdmin);
                        sessionStorage.setItem("firstName", res.firstName);
                        sessionStorage.setItem("lastName", res.lastName);
                        sessionStorage.setItem("createdAt", res.createdAt);
                        console.log(sessionStorage)
                        this.$router.push("profil");
                        alert(" 🙋‍♂️ Bienvenue ! Connectez-vous dès à présent ! 🙋‍♀️");
                    } else {
                        alert(" 🚨 Mot de passe incorrect ! ");
                    }
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="css">
</style>