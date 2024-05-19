export default async function handler(req, res) {
  try {
    const historicalIPCresponse = await fetch(
      `https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx?user=${process.env.BANCO_CENTRAL_USER}&pass=${process.env.BANCO_CENTRAL_PASSWORD}&timeseries=G073.IPC.IND.2018.M`
    );
    const { Series: historicalIPC } = await historicalIPCresponse.json();

    const generalIPCresponse = await fetch(
      `https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx?user=${process.env.BANCO_CENTRAL_USER}&pass=${process.env.BANCO_CENTRAL_PASSWORD}&timeseries=G073.IPC.IND.2018.M`
    );
    const { Series: generalIPC } = await generalIPCresponse.json();

    return res
      .status(200)
      .json({ data: { historicalIPC, generalIPC }, error: null });
  } catch (error) {
    console.log('Error fetching user data:', error);
    return res.status(500).json({ data: null, error: 'Error getting users' });
  }
}
