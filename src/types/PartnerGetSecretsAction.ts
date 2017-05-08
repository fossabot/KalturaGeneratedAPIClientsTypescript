
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetSecretsActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	adminEmail : string;
	cmsPassword : string;
}

/** 
* Retrieve partner secret and admin secret
**/
export class PartnerGetSecretsAction extends KalturaRequest<KalturaPartner> {

    partnerId : number;
	adminEmail : string;
	cmsPassword : string;

    constructor(data : PartnerGetSecretsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartner', responseConstructor : KalturaPartner  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner'  },
				action : { type : 'c' , default : 'getSecrets'  },
				partnerId : { type : 'n'   },
				adminEmail : { type : 's'   },
				cmsPassword : { type : 's'   }
            }
        );
        return result;
    }
}
