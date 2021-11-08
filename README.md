## parcel-shadowed-variables

This repo contains a reproduction of an issue where if you shadow a global variable within a function, parcel won't let you access that variable through the `window` object.

See [this github issue](https://github.com/parcel-bundler/parcel/issues/7270) and [this stackoverflow question](https://stackoverflow.com/questions/68947245/how-can-i-set-a-global-variable-inside-a-function-using-the-parcel-bundler).