import { HttpClient, HttpHeaders } from "@angular/common/http";
const serverUrl = "http://102.219.178.102:3032/";
const arrayCategories = [{ category: 'VEHICLES' }, { category: 'REAL ESTATE' },
 { category: 'MULTIMEDIA' }, { category: 'HOME' }, { category: 'HOBBIES' }, 
 { category: 'SERVICES' }, { category: 'PROFESSIONNEL MATERIAL' }, { category: 'JOB' }
 , { category: 'VACATION' }, { category: 'FASHION' }];

 /*
 VEHICULES IMMOBILIER MULTIMEDIA MAISON LOISIRS 
 SERVICES ,MATERIEL PROFESSIONNEL ,EMPLOI
 VACANCES MODE
 */
const headers = new HttpHeaders({
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("access_token"),
});
export { serverUrl, headers,arrayCategories }