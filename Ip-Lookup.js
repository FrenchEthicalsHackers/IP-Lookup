import axios from 'axios';
import chalk from 'chalk';
import readline from 'readline';

const API_URL = 'https://ipinfo.io';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getGeolocation(ip) {
    try {
        const response = await axios.get(`${API_URL}/${ip}/json`);
        
        if (response.data) {
            const { ip, hostname, city, region, country, loc, org } = response.data;
            const locationData = {
                '[+] IP Address': ip,
                '[+] Hostname': hostname,
                '[+] City': city,
                '[+] Region': region,
                '[+] Country': country,
                '[+] Location': loc,
                '[+] Organization': org
            };
            
            const sortedData = Object.keys(locationData)
                .sort()
                .reduce((obj, key) => {
                    obj[key] = locationData[key];
                    return obj;
                }, {});

            console.log(chalk.blue('Geolocation Data:'));
            for (const [key, value] of Object.entries(sortedData)) {
                console.log(`${chalk.green(key)}: ${chalk.white(value)}`);
            }
        } else {
            console.log(chalk.red('No data found for the given IP.'));
        }
    } catch (error) {
        console.error(chalk.red('Error fetching geolocation data:'), error.message);
    }
}

rl.question(chalk.yellow('Enter the IP address to lookup: '), (ipAddress) => {
    getGeolocation(ipAddress.trim());
    rl.close();
});
