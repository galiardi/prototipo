import { useState, useEffect } from 'react';
import firebase from '../firebase/client';

export const useGetAverageAnnualInflation = () => {
  // const [historicalIPC, setHistoricalIPC] = useState([]);
  const [generalIPC, setGeneralIPC] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await getEconomicIndicators();
      if (error) return console.log(error);
      // setHistoricalIPC(data.historicalIPC.Obs);
      setGeneralIPC(data.Obs);
    })();
  }, []);

  const getEconomicIndicators = async () => {
    const db = firebase.firestore();
    try {
      const response = await db
        .collection('economic-indicators')
        .doc('generalIPCSerie')
        .get();

      const data = response.data();

      return { data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  const getAverageAnnualInflation = (ipcSerie) => {
    if (!ipcSerie.length) return 'cargando...';
    const firstIPCIndex = ipcSerie.length % 12;
    const trimedIPCSerie = ipcSerie.slice(firstIPCIndex);
    const filteredIPCSerie = trimedIPCSerie.filter((ipc, i) => i % 12 === 0);

    const sum = filteredIPCSerie.reduce((acc, el) => acc + Number(el.value), 0);
    const averageInflation = sum / filteredIPCSerie.length;
    return averageInflation;
  };

  return getAverageAnnualInflation(generalIPC);
};
