/** @type {import('next').NextConfig} */
export default {
  // Viewers open the dev server (:3000) and the shipped build (:4000) through public boat URLs.
  allowedDevOrigins: ["*.on.ascii.dev", "*.on.boat.dev"],
  // A type error must never stop chat's round from shipping.
  typescript: { ignoreBuildErrors: true },
  devIndicators: false,
};
