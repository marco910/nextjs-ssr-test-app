module.exports = {
  apps: [
    {
      // App settings
      name: "codedeploy-test-app", // App name
      script: "npm", // Script
      args: "start", // Script arguments e.g. `start` or `run %script_name%`
      cwd: "/var/www/codedeploy/public", // Working directory e.g. directory of the git clone

      // Cluster mode
      // instances: "max",
      // exec_mode: "cluster",
      // wait_ready: true, // Wait until app sends `process.send('ready');`
      // listen_timeout: 10000, // Timeout to listen for ready sign

      // Env variables
      env_production: {
        NODE_ENV: "production", // Node environment
      },

      // Log files
      error_file: "/var/log/pm2/codedeploy-test-app_error.log", // Error log
      out_file: "/var/log/pm2/codedeploy-test-app_out.log", // Output log
    },
  ],
};
