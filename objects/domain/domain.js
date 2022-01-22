const getDomainInfo = (domain)=>{
    if (!domain.startsWith('http') && !domain.startsWith('https')){
        domain = 'http://' + domain
    }
    return {
        scheme: domain.split('://')[0],
        name: domain.split('://')[1]
    }
}



console.log(getDomainInfo('http://google.com'))

// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }
