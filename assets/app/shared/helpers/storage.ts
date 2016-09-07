class Storage {

  getAuthToken() {
    return localStorage.getItem('token');
  }

  setAuthToken(token:any) {
    localStorage.setItem('token', token);
  }

  removeAuthToken() {
    // localStorage.removeItem('token');
    localStorage.clear();
  }

  setRoleToken(role:any){
    localStorage.setItem('role', role);
  }

  setNameToken(name:any){
    localStorage.setItem('name', name);
  }

  getRoleToken(){
    return localStorage.getItem('role');
  }

  getNameToken(){
    return localStorage.getItem('name');
  }

  getIdToken(){
    return localStorage.getItem('id');
  }
}

export const storage = new Storage();
