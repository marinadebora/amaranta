import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alPlato: [],
  bebidas: [],
  bebidasAlcohol: [],
  cafeteria: [],
  ensaladasGuarniciones: [],
  entrePanes: [],
  pasteleria: [],
  pizzaTartasEmpanadas: [],
  postres: [],
  tapeo: [],
};

export const carta_slice = createSlice({
  name: 'carta_slice',
  initialState,
  reducers: {
    get_alPlato: (state, action) =>
    {
      state.alPlato = action.payload.data
    },
    get_bebidas: (state, action) =>
    {
      state.bebidas = action.payload.data
    },
    get_bebidasAlcohol: (state, action) =>
    {
      state.bebidasAlcohol = action.payload.data
    },
    get_cafeteria: (state, action) =>
    {
      state.cafeteria = action.payload.data
    },
    get_ensaladasGuarniciones: (state, action) =>
    {
      state.ensaladasGuarniciones = action.payload.data
    },
    get_entrePanes: (state, action) =>
    {
      state.entrePanes = action.payload.data
    },
    get_pasteleria: (state, action) =>
    {
      state.pasteleria = action.payload.data
    },
    get_pizzaTartasEmpanadas: (state, action) =>
    {
      state.pizzaTartasEmpanadas = action.payload.data
    },
    get_postres: (state, action) =>
    {
      state.postres = action.payload.data
    },
    get_tapeo: (state, action) =>
    {
      state.tapeo = action.payload.data
    },
    error_carta: (state, action) =>
    {
      state.data = action.payload.data,
        state.status = action.payload.status
    }
  }
});
export const { get_alPlato, get_bebidas, get_bebidasAlcohol, get_cafeteria, get_ensaladasGuarniciones, get_entrePanes, get_pasteleria, get_pizzaTartasEmpanadas, get_postres, get_tapeo, error_carta } = carta_slice.actions;
export default carta_slice.reducer