
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Generic Distribution Provider Action by id
**/
export class GenericDistributionProviderActionGetAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;

    constructor(data : GenericDistributionProviderActionGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderAction', responseConstructor : KalturaGenericDistributionProviderAction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction'  },
				action : { type : 'c' , default : 'get'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}
