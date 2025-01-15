Episode 1: Nov 4TH

What is CDN ?
---------------------------------------------------------------------------------------------------------
A CDN (Content Delivery Network) is a network of servers distributed globally to deliver content to users 
more efficiently. By hosting content like JavaScript libraries, images, and videos on multiple servers, 
CDNs reduce latency, decrease load times, and improve performance by serving content from a server near 
the user.


crossorigin attribute
----------------------------------------------------------------------------------------------------------
The crossorigin attribute in the <script> tag controls how the browser handles requests for 
cross-origin resources, especially when it comes to credentials (like cookies and HTTP authorization headers). Here’s how it works:

crossorigin="anonymous": This sends the request without credentials, 
ensuring no cookies or authentication information is included. This is used when accessing resources that 
don’t require credentials.

crossorigin="use-credentials": This sends credentials along with the request, used for resources 
that require authentication.



Episode 1: JAN 15TH
----------------------------------------------------------------------------------------------------------

NPM
----------------------------------------------------------------------------------------------------------
package.json: This file contains the configuration for NPM.
----------------------------------------------------------------------------------------------------------
Bundlers
Parcel: A web application bundler.
----------------------------------------------------------------------------------------------------------
Dependencies
Dev Dependencies vs. Normal Dependencies:

Dev dependencies are only needed during development (e.g., tools like Parcel, ESLint).
Normal dependencies are needed in both development and production environments (e.g., React, Lodash).
----------------------------------------------------------------------------------------------------------
package.json vs. lock.json:

package.json specifies the approximate versions of dependencies, with possible version ranges.
lock.json keeps track of the exact versions of dependencies used in the project, ensuring consistency across environments.

Versioning Formats:
^2.13.3: The caret (^) allows updates to the minor version or patch updates. For example, it would update from 2.13.3 to 2.14.0 or 2.13.4 but not to 3.0.0.
~2.13.3: The tilde (~) allows updates only to the patch version. For example, it would update from 2.13.3 to 2.13.4 but not to 2.14.0.
----------------------------------------------------------------------------------------------------------
Transitive Dependencies
Transitive dependencies are dependencies of your project's dependencies. For example, if you require Parcel in your project, Parcel may depend on other packages, and those dependencies could have their own dependencies. These are all transitive dependencies.
----------------------------------------------------------------------------------------------------------
npx vs. npm
npx: Used to execute a package without installing it globally.
npm: Used to install packages.
----------------------------------------------------------------------------------------------------------
Parcel
To run a project with Parcel:
npx parcel index.html
----------------------------------------------------------------------------------------------------------
Parcel Superpowers

Hot Module Replacement (HMR): Enables instant updates during development by watching for changes in files.
Local server: Starts a local development server.
Dev Build: Optimizes the build for development with faster rebuild times.
Faster Build (Caching): Parcel uses caching to make subsequent builds faster.
Image Optimization: Automatically optimizes images.
Minification: Reduces file size by removing unnecessary characters from the code.
Bundling: Combines multiple files into one optimized bundle.
Compressing: Reduces the size of files for faster loading.
Consistent Hashing: Ensures that files are consistently named across different builds.
Code Splitting: Splits code into smaller chunks to load only what is needed.
Differential Bundling: Creates optimized bundles based on the browser's capabilities.
Tree Shaking: Removes unused code to reduce the final bundle size.
----------------------------------------------------------------------------------------------------------
Browserslist
A configuration tool to specify which browsers to support, helping optimize the build for the targeted environments.







