const axios = require('axios');
const db = require('./db');

const getCompanies = (request, response) => {
    db.any('select * from company_list')
      .then(data => {
          response.status(200)
                  .json(data);
      })
      .catch(error => {
        console.error(error);
      });
}

const addCompany = (request, response) => {
    const { cin, name } = request.body;

    //console.log(request.body);

    db.none('insert into company_list(cin, name) values($1, $2)', [cin, name])
      .then(() => {
        response.status(200).send("Success");
      })
      .catch(() => {
        response.status(500).send("Error");
      });
}


const searchCompany = (request, response) => {
    const { search } = request.body;

    axios.post('https://www.zaubacorp.com/custom-search', {
            search: search,
            filter: 'company'
        })
        .then(res => {
            const data = res.data;
            if (data) {
                let list = data.trim().split('\n');
                list = list.filter(item => {
                                const trimmed = item.trim();
                                return trimmed.length !== 0;
                            })
                            .map(item => item.trim());

                const regex = new RegExp('.*"company/(.+)/(.+)">(.+) <.*');

                list = list.map(item => {
                    let match = item.match(regex);
                    return {id: match[1], cin: match[2], name: match[3]};
                });

                response.json(list);
            }
        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = {
    getCompanies,
    addCompany,
    searchCompany
}
