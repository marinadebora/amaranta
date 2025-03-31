import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config";
import { error_carta, get_alPlato, get_bebidas, get_bebidasAlcohol, get_cafeteria, get_ensaladasGuarniciones, get_entrePanes, get_pasteleria, get_pizzaTartasEmpanadas, get_postres, get_tapeo } from "./carta_slice";



export const getAlPlato = ()=>{
  return async(dispatch)=>{
    try {
      
       const alPlatoRef = collection(db,"alPlato")
           let data = await getDocs(alPlatoRef)
             .then(res=>{
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_alPlato({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getBebidas = ()=>{
  return async(dispatch)=>{
    try {
      
       const bebidasRef = collection(db,"bebidas")
           let data = await getDocs(bebidasRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_bebidas({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getBebidasAlcohol = ()=>{
  return async(dispatch)=>{
    try {
      
       const bebidasAlcoholRef = collection(db,"bebidasAlcohol")
           let data = await getDocs(bebidasAlcoholRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_bebidasAlcohol({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getCafeteria = ()=>{
  return async(dispatch)=>{
    try {
      
       const cafeteriaRef = collection(db,"cafeteria")
           let data = await getDocs(cafeteriaRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_cafeteria({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getEnsaladasGuarniciones = ()=>{
  return async(dispatch)=>{
    try {
      
       const ensaladasGuarnicionesRef = collection(db,"ensaladasGuarniciones")
           let data = await getDocs(ensaladasGuarnicionesRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_ensaladasGuarniciones({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getEntrePanes = ()=>{
  return async(dispatch)=>{
    try {
      
       const entrePanesRef = collection(db,"entrePanes")
           let data = await getDocs(entrePanesRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_entrePanes({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getPasteleria = ()=>{
  return async(dispatch)=>{
    try {
      
       const pasteleriaRef = collection(db,"pasteleria")
           let data = await getDocs(pasteleriaRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_pasteleria({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getPizzaTartasEmpanadas = ()=>{
  return async(dispatch)=>{
    try {
      
       const pizzaTartasEmpanadasRef = collection(db,"pizzaTartasEmpanadas")
           let data = await getDocs(pizzaTartasEmpanadasRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_pizzaTartasEmpanadas({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getPostres = ()=>{
  return async(dispatch)=>{
    try {
      
       const postresRef = collection(db,"postres")
           let data = await getDocs(postresRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_postres({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};

export const getTapeo = ()=>{
  return async(dispatch)=>{
    try {
      
       const tapeoRef = collection(db,"tapeo")
           let data = await getDocs(tapeoRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_tapeo({data}))
    } catch (error) {
      dispatch(error_carta(error))
    }
  }
};