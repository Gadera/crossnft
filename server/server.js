const express = require('express');
const bodyParser = require('body-parser');
const web5 = require('@web5/api');
const app = express();
const port = 3001;
app.use(bodyParser.json());

const web5Instance = new web5.Web5();

app.post('/save-did', async (req, res) => {
  try {
    const { did } = req.body;
    
    if (!web5Instance.dwn || !web5Instance.dwn.records || !web5Instance.dwn.records.write) {
      throw new Error('DWN write API is not available');
    }
    
    const { record } = await web5Instance.dwn.records.write({
      data: did,
      message: {
        dataFormat: 'text/plain',
      },
    });

    res.json({ success: true, message: 'DID saved successfully', record });
  } catch (error) {
    console.error('Error saving DID:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});