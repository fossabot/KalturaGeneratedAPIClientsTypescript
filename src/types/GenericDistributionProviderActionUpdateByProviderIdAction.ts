
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionUpdateByProviderIdActionArgs  extends KalturaRequestArgs {
    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;
}

/** 
* Update Generic Distribution Provider Action by provider id
**/
export class GenericDistributionProviderActionUpdateByProviderIdAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;

    constructor(data : GenericDistributionProviderActionUpdateByProviderIdActionArgs)
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
				action : { type : 'c' , default : 'updateByProviderId'  },
				genericDistributionProviderId : { type : 'n'   },
				actionType : { type : 'en'   , subType : 'KalturaDistributionAction'},
				genericDistributionProviderAction : { type : 'o'   , fallbackConstructor :  KalturaGenericDistributionProviderAction, subType : 'KalturaGenericDistributionProviderAction'}
            }
        );
        return result;
    }
}
