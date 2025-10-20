module.exports = {
  hooks: {
    readPackage (pkg) {
      if (pkg.dependencies['react'] || pkg.peerDependencies['react']) {
        pkg.peerDependencies['@types/react'] = '*'
      }
      return pkg
    }
  }
}