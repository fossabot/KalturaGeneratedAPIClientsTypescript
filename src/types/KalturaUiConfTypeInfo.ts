
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUiConfTypeInfoArgs  extends KalturaObjectBaseArgs {
    type? : KalturaUiConfObjType;
	versions? : KalturaString[];
	directory? : string;
	filename? : string;
}

/** 
* Info about uiconf type
**/
export class KalturaUiConfTypeInfo extends KalturaObjectBase {

    type : KalturaUiConfObjType;
	versions : KalturaString[];
	directory : string;
	filename : string;

    constructor(data? : KalturaUiConfTypeInfoArgs)
    {
        super(data);
        if (typeof this.versions === 'undefined') this.versions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUiConfTypeInfo'  },
				type : { type : 'en'   , subType : 'KalturaUiConfObjType'},
				versions : { type : 'a'   , fallbackConstructor :  KalturaString, subType : 'KalturaString'},
				directory : { type : 's'   },
				filename : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUiConfTypeInfo',KalturaUiConfTypeInfo);