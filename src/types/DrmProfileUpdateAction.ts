
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileUpdateActionArgs  extends KalturaRequestArgs {
    drmProfileId : number;
	drmProfile : KalturaDrmProfile;
}

/** 
* Update an existing KalturaDrmProfile object
**/
export class DrmProfileUpdateAction extends KalturaRequest<KalturaDrmProfile> {

    drmProfileId : number;
	drmProfile : KalturaDrmProfile;

    constructor(data : DrmProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmProfile', responseConstructor : KalturaDrmProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmprofile' },
				action : { type : 'c', default : 'update' },
				drmProfileId : { type : 'n' },
				drmProfile : { type : 'o', subTypeConstructor : KalturaDrmProfile, subType : 'KalturaDrmProfile' }
            }
        );
        return result;
    }
}

