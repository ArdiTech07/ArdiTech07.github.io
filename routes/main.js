__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/website/index.html')
})

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'ZhirrrBot',
            namaowner: 'Zhirrr',
            instagram: 'zhirr_ajalah',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
