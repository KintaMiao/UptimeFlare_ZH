const pageConfig = {
  title: "示例状态监控页面",
  links: [
    { link: 'https://example.com', label: '示例站点' },
    { link: 'mailto:admin@example.com', label: '联系我们', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 5,
  monitors: [
    {
      id: "example_main",
      name: "Example.com 主站",
      method: 'GET',
      target: 'https://example.com',
      tooltip: '示例主站点',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },
    {
      id: "google_dns",
      name: "Google DNS 服务器",
      method: 'TCP_PING',
      target: '8.8.8.8:53',
      timeout: 5000,
    },
    {
      id: "apple_main",
      name: "Apple 官网",
      method: 'GET',
      target: 'https://www.apple.com',
      timeout: 5000,
    },
    {
      id: "github_api",
      name: "GitHub API",
      method: 'HEAD',
      target: 'https://api.github.com',
      timeout: 10000,
    }
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
