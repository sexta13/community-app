/**
 * Isomorphic Communities service.
 */
import topcoderUtils from 'topcoder-react-utils';
import { services } from 'topcoder-react-lib';

console.log(services);
const { isomorphy } = topcoderUtils;
const preGetService = services.communities.getService;

/**
 * Returns a new or existing communities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {Communities} Communties service object
 */
let lastInstance = null;
export function getService(tokenV3) {
  if (!lastInstance || (tokenV3 !== lastInstance.private.tokenV3)) {
    if (isomorphy.isClientSide()) lastInstance = preGetService(tokenV3);
    else {
      /* eslint-disable global-require */
      return require('server/services/communities');
      /* eslint-enable global-require */
    }
  }
  return lastInstance;
}

// Override with the isomorphic version
services.communities.getService = getService;

export default undefined;
