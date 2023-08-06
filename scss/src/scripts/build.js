const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

// compile sass files into a css code
const result = sass.renderSync({
    data: fs.readFileSync(path.resolve('src/global.scss')).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [path.resolve('src')],
});

// create file with the result css code compiled
fs.writeFileSync(path.resolve('src/lib/global.css'), result.css.toString());
