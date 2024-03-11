import { initFederation } from '@angular-architects/native-federation';

// initFederation('/assets/federation.manifest.json')
initFederation('http://localhost:3000/api')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
