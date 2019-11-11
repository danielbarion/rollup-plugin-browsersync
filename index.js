var bs = require('browser-sync')
var bsInstanceRollup = bs.create('rollup')

module.exports = function browsersync(options) {
    return {
        name: 'browsersync',
        writeBundle() {
            new Promise((resolve) => {

                /**
                 * Only open the browser when the entire bundle
                 * process is complete and the files are saved.
                 */
                if (!bsInstanceRollup.active) {
                    bsInstanceRollup.init(options || { server: '.' });
                }

                resolve();
            })
        }
    }
};
