export const saveUserId = (id)=>{
    localStorage.setItem('userID',JSON.stringify(id))
}
export const getUserId = () => {
  const userID = JSON.parse(localStorage.getItem('userID'))
  return userID
}