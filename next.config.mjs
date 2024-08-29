/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = '/'

if(isGithubActions) {
    basePath = '/Next_TS_Portfolio/'
}

const nextConfig = {
    basePath: basePath,
    output: "export"
};

export default nextConfig;
