export const isLoggedId = () => {

    let data = localStorage.getItem("data");
    if (data != null) return true;
    else return false;

}