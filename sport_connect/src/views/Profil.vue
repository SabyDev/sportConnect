<template>
     <section>
         <Navbar></Navbar>

            <div class="signupContainer">
                <h2>Gestion du compte de {{ userProfil.firstName }} {{ userProfil.lastName }}</h2>
                <p>Vous êtes inscrit depuis le <span>{{ userProfil.createdAt | moment("DD.MM.YY") }}</span>🥰.</p>
                <button @click="deleteProfil" class="profil_button">Supprimez votre compte 😢</button>  
            </div>  
     </section>
</template>

<script >
    import Navbar from '../components/Navbar'
export default {
    name: 'Profil',
    components: {
        Navbar
    },
    data() {
        return {
            userProfil: {
                UserId: sessionStorage.getItem('userId'),
                firstName: sessionStorage.getItem('firstName'),
                lastName: sessionStorage.getItem('lastName'),
                createdAt: sessionStorage.getItem('createdAt')                
            },
            inputProfil: {
                lastName: "",
                firstName: ""               
            }
        }
    },
    mounted() {
        let url = `http://localhost:3000/api/user/profil`;
        let options = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
            }
        };
         fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.userProfil.firstName = data.firstName;
                this.userProfil.lastName = data.lastName;
                this.userProfil.createdAt = data.createdAt;                
            })

            .catch(error => console.log(error))
    },

    methods: {
        getOneProfil() {
            let url = `http://localhost:3000/api/user/${ this.userProfil.userId }`;
            let options = {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.userProfil.firstName = data.firstName;
                    this.userProfil.lastName = data.lastName;
                  
                })
                .catch(error => console.log(error))
        },

        deleteProfil() {
            let url = `http://localhost:3000/api/user/${ this.userProfil.userId }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then((response) => {
                    console.log(response);
                    sessionStorage.clear();
                    alert("Suppression du compte confirmée ! 😢");
                })
                .then(this.$router.push("/signup"))
                .catch(error => console.log(error))
        },
    },
} 
</script>

<style lang="css">
.profil_button {
    width: auto;
    margin: 10px 10px 50px 10px;
}


</style>
