
# IP Geolocation Lookup Script

## Overview
This script allows users to easily retrieve geolocation information for a specified IP address using the **ipinfo.io** API. It provides detailed information such as the IP address, hostname, city, region, country, geographical coordinates, and the organization associated with the IP.

## Features
- **User Input**: Prompts the user to enter an IP address for lookup.
- **Formatted Output**: Displays the results with colored formatting for better readability.
- **Sorted Information**: Presents the retrieved data in a neatly organized manner.

## Requirements
To run this script, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- Required npm packages:
  - `axios`: For making HTTP requests
  - `chalk`: For colored terminal output

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ip-geolocation-lookup.git
   cd ip-geolocation-lookup
   ```

2. Install the required packages:
   ```bash
   npm install axios chalk
   ```


## Usage
1. Run the script using Node.js:
   ```bash
   node Ip-Lookup.js
   ```
2. Enter the IP address when prompted.
3. View the geolocation data displayed in the terminal.

## Example Output
```
Enter the IP address to look up: 8.8.8.8
Geolocation Data:
[+] IP Address: 8.8.8.8
[+] Hostname: dns.google
[+] City: Mountain View
[+] Region: California
[+] Country: US
[+] Location: 37.3860,-122.0838
[+] Organization: Google LLC
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [ipinfo.io](https://ipinfo.io/) for providing the geolocation API.
- The open-source community for providing libraries that make this project possible.
