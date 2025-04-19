const backendDomain ="http://localhost:5000";

const summaryApi = {
    sigUp:{
        url:`${backendDomain}/api/signup`,
        method:"POST",
    },
    signIn:{
        url:`${backendDomain}/api/login`,
        method:"POST",
    }
}

export default summaryApi;
