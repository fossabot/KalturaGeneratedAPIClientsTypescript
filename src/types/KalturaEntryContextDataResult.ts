
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaPluginData } from './KalturaPluginData';
import { KalturaContextDataResult, KalturaContextDataResultArgs } from './KalturaContextDataResult';

export interface KalturaEntryContextDataResultArgs  extends KalturaContextDataResultArgs {
    isSiteRestricted? : boolean;
	isCountryRestricted? : boolean;
	isSessionRestricted? : boolean;
	isIpAddressRestricted? : boolean;
	isUserAgentRestricted? : boolean;
	previewLength? : number;
	isScheduledNow? : boolean;
	isAdmin? : boolean;
	streamerType? : string;
	mediaProtocol? : string;
	storageProfilesXML? : string;
	accessControlMessages? : KalturaString[];
	accessControlActions? : KalturaRuleAction[];
	flavorAssets? : KalturaFlavorAsset[];
	msDuration? : number;
	pluginData? : KalturaPluginData[];
}


export class KalturaEntryContextDataResult extends KalturaContextDataResult {

    isSiteRestricted : boolean;
	isCountryRestricted : boolean;
	isSessionRestricted : boolean;
	isIpAddressRestricted : boolean;
	isUserAgentRestricted : boolean;
	previewLength : number;
	isScheduledNow : boolean;
	isAdmin : boolean;
	streamerType : string;
	mediaProtocol : string;
	storageProfilesXML : string;
	accessControlMessages : KalturaString[];
	accessControlActions : KalturaRuleAction[];
	flavorAssets : KalturaFlavorAsset[];
	msDuration : number;
	pluginData : KalturaPluginData[];

    constructor(data? : KalturaEntryContextDataResultArgs)
    {
        super(data);
        if (typeof this.accessControlMessages === 'undefined') this.accessControlMessages = [];
		if (typeof this.accessControlActions === 'undefined') this.accessControlActions = [];
		if (typeof this.flavorAssets === 'undefined') this.flavorAssets = [];
		if (typeof this.pluginData === 'undefined') this.pluginData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEntryContextDataResult'  },
				isSiteRestricted : { type : 'b'   },
				isCountryRestricted : { type : 'b'   },
				isSessionRestricted : { type : 'b'   },
				isIpAddressRestricted : { type : 'b'   },
				isUserAgentRestricted : { type : 'b'   },
				previewLength : { type : 'n'   },
				isScheduledNow : { type : 'b'   },
				isAdmin : { type : 'b'   },
				streamerType : { type : 's'   },
				mediaProtocol : { type : 's'   },
				storageProfilesXML : { type : 's'   },
				accessControlMessages : { type : 'a'   , fallbackConstructor :  KalturaString, subType : 'KalturaString'},
				accessControlActions : { type : 'a'   , fallbackConstructor :  KalturaRuleAction, subType : 'KalturaRuleAction'},
				flavorAssets : { type : 'a'   , fallbackConstructor :  KalturaFlavorAsset, subType : 'KalturaFlavorAsset'},
				msDuration : { type : 'n'   },
				pluginData : { type : 'a'   , fallbackConstructor :  KalturaPluginData, subType : 'KalturaPluginData'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryContextDataResult',KalturaEntryContextDataResult);