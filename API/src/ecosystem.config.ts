module.exports = {
  apps: [
    {
      name: 'amadeus',
      script: './build/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      cron_restart: '0 0 * * *',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
