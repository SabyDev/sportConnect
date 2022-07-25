<template>

     <!-- formulaire d'inscription -->
          <div class="signupContainer">          
            <h2>Pour vous inscrire, merci de remplir ce formulaire</h2>
            <form v-on:submit.prevent="signup" id="form-signup" >
              <div class="form-group">
                <label for="lastname">Nom :</label>
                <input type="text" id="lastname" name="lastname" class="form-control" required 
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.lastname"/>
              </div>
              <div class="form-group">
                <label for="firstname">Prénom :</label>
                <input type="text" id="firstname" name="firstname" class="form-control" required 
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.firstname"/>
              </div>
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required 
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" v-model="inputSignup.email"/>
              </div>
              <div class="form-group">
                <label for="password"> Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" v-model="inputSignup.password"/>
              </div>  
              <p> Minimum 8 caractères dont 1 Majuscule, 1 minuscule et un chiffre</p>
              <button>C'est parti !!! 🤩</button>                                       
            </form> 
             <!-- renvoie au formulaire de connection -->
              <nav class="navlogsign"><p>Si vous avez déjà un compte <router-link to="/">Connectez-vous</router-link></p></nav> 
          </div> 
</template>


<script>

    
export default {
    name: 'SignUp',
    

    data() {
        return {
            inputSignup: {
                lastname: "",
                firstname: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup() {
            let inputDatas = {
                lastName: this.inputSignup.lastname,
                firstName: this.inputSignup.firstname,                
                email: this.inputSignup.email,
                password: this.inputSignup.password
            }
            console.log(inputDatas)
            let url = "http://localhost:3000/api/user/register"
            let options = {
                method: "POST",
                body: JSON.stringify(inputDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(options)
             return fetch(url, options)
                .then(res => res.json())
                .then((res) => {                    
                    sessionStorage.setItem("userId", res.userId);
                    sessionStorage.setItem("token", res.token);
                    console.log(sessionStorage)
                    this.$router.push("/");
                    alert(" Bienvenue ! Veuillez vous connecter  ! ");                    
                })
                .catch(error => console.log(error))
        }
    }
}
</script>


