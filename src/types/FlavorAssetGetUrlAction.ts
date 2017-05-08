
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFlavorAssetUrlOptions } from './KalturaFlavorAssetUrlOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	storageId? : number;
	forceProxy? : boolean;
	options? : KalturaFlavorAssetUrlOptions;
}

/** 
* Get download URL for the asset
**/
export class FlavorAssetGetUrlAction extends KalturaRequest<string> {

    id : string;
	storageId : number;
	forceProxy : boolean;
	options : KalturaFlavorAssetUrlOptions;

    constructor(data : FlavorAssetGetUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.forceProxy === 'undefined') this.forceProxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset'  },
				action : { type : 'c' , default : 'getUrl'  },
				id : { type : 's'   },
				storageId : { type : 'n'   },
				forceProxy : { type : 'b'   },
				options : { type : 'o'   , fallbackConstructor :  KalturaFlavorAssetUrlOptions, subType : 'KalturaFlavorAssetUrlOptions'}
            }
        );
        return result;
    }
}
