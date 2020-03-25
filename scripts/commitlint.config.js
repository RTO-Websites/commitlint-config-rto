module.exports = {
  extends: [
     "@rto-websites/commitlint-config-rto"
  ],
  rules: {
    "scope-enum": [2, "always", ["global"]] //add the scopes you need
  }
};
