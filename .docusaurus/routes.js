import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ddd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '852'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '58c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b57'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '3d2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '75e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '851'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '305'),
    exact: true
  },
  {
    path: '/docs/2.0',
    component: ComponentCreator('/docs/2.0', '831'),
    routes: [
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/balances',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/balances', '198'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/contribute',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/contribute', 'dbe'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/costs',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/costs', '9ec'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/Introduction',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/Introduction', 'b5e'),
        exact: true
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/Introduction/our-solution',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/Introduction/our-solution', 'fe7'),
        exact: true
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/licenses',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/licenses', '1a6'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/password-protect',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/password-protect', '911'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/querying',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/querying', 'fb2'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/testing',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/testing', '87d'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/customization-homepage',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/customization-homepage', '1dd'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/drop-customization',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/drop-customization', '263'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/fc-drops',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/fc-drops', '9d3'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/ft-drops',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/ft-drops', '1d5'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/introduction',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/introduction', '440'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops', 'e2f'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/sale-customization',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/sale-customization', 'b68'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/simple-drops',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/simple-drops', '058'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/time-customization',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/time-customization', '7d6'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/usage-customization',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/usage-customization', '061'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/KeypomProtocol/overview',
        component: ComponentCreator('/docs/2.0/Concepts/KeypomProtocol/overview', '614'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics',
        component: ComponentCreator('/docs/2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics', '443'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys',
        component: ComponentCreator('/docs/2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys', '634'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Concepts/welcome',
        component: ComponentCreator('/docs/2.0/Concepts/welcome', 'c90'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/Cookbook/balances',
        component: ComponentCreator('/docs/2.0/Cookbook/balances', '479'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/customizations/dropConfig',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/customizations/dropConfig', '8fe'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/customizations/password',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/customizations/password', '4bc'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/customizations/saleConfig',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/customizations/saleConfig', '3ea'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/customizations/timeConfig',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/customizations/timeConfig', '90b'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/customizations/usageConfig',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/customizations/usageConfig', '973'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/fc',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/fc', '17d'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/ft',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/ft', '544'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/NEAR',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/NEAR', '144'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/nft',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/nft', 'c7d'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/drops/trial',
        component: ComponentCreator('/docs/2.0/Cookbook/drops/trial', '042'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/keys',
        component: ComponentCreator('/docs/2.0/Cookbook/keys', '7ed'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/Cookbook/utilities',
        component: ComponentCreator('/docs/2.0/Cookbook/utilities', '6d6'),
        exact: true
      },
      {
        path: '/docs/2.0/Cookbook/welcome',
        component: ComponentCreator('/docs/2.0/Cookbook/welcome', '175'),
        exact: true,
        sidebar: "Cookbook"
      },
      {
        path: '/docs/2.0/exec-summary',
        component: ComponentCreator('/docs/2.0/exec-summary', '8ec'),
        exact: true,
        sidebar: "Concepts"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/BasicTransaction',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/BasicTransaction', 'bfc'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ContractSourceMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ContractSourceMetadata', '243'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/CreateDropProtocolArgs',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/CreateDropProtocolArgs', '8e7'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/CreateOrAddReturn',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/CreateOrAddReturn', 'f63'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/Drop',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/Drop', '694'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/DropConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/DropConfig', '574'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/EnvVars',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/EnvVars', '239'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/FCData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/FCData', '02b'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/FTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/FTData', '2f2'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/Funder',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/Funder', 'a5f'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/FungibleTokenMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/FungibleTokenMetadata', 'b89'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/GeneratedKeyPairs',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/GeneratedKeyPairs', '158'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/KeyInfo',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/KeyInfo', '339'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/Method',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/Method', '5b8'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/NFTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/NFTData', '6d4'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/NonFungibleTokenMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/NonFungibleTokenMetadata', 'cc9'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/PasswordPerUse',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/PasswordPerUse', '53d'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedDrop',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedDrop', 'dce'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedDropConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedDropConfig', '620'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedFCData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedFCData', 'b6e'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedFTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedFTData', '5b0'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedKeyInfo',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedKeyInfo', '4da'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedMethod',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedMethod', '78d'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedNFTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedNFTData', '523'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedNonFungibleTokenMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedNonFungibleTokenMetadata', 'da4'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedNonFungibleTokenObject',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedNonFungibleTokenObject', 'bb5'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedPublicSaleConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedPublicSaleConfig', '2ba'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedSimpleData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedSimpleData', '8ba'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedTimeConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedTimeConfig', '18f'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedUsageConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedUsageConfig', '2e8'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/PublicSaleConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/PublicSaleConfig', '41b'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/SimpleData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/SimpleData', '5c0'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/TimeConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/TimeConfig', 'aa8'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/interfaces/UsageConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/interfaces/UsageConfig', 'f8a'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/modules',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/modules', '417'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Core/welcome',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Core/welcome', '060'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/classes/KeypomWallet',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/classes/KeypomWallet', 'd33'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/BasicTransaction',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/BasicTransaction', 'bb3'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ContractSourceMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ContractSourceMetadata', 'e8e'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/CreateDropProtocolArgs',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/CreateDropProtocolArgs', 'eb4'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/CreateOrAddReturn',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/CreateOrAddReturn', '421'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/Drop',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/Drop', '5a9'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/DropConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/DropConfig', 'f5b'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/EnvVars',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/EnvVars', '5c3'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/FCData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/FCData', '4ce'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/FTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/FTData', '3bd'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/Funder',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/Funder', 'ce6'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/FungibleTokenMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/FungibleTokenMetadata', '22f'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/GeneratedKeyPairs',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/GeneratedKeyPairs', '138'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/KeyInfo',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/KeyInfo', '945'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/Method',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/Method', 'd08'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/NFTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/NFTData', '199'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/NonFungibleTokenMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/NonFungibleTokenMetadata', '202'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/PasswordPerUse',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/PasswordPerUse', '2d1'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDrop',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDrop', 'd58'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig', '3c4'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedFCData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedFCData', '911'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedFTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedFTData', '991'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedKeyInfo',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedKeyInfo', '598'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedMethod',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedMethod', '42e'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedNFTData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedNFTData', '9ec'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedNonFungibleTokenMetadata',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedNonFungibleTokenMetadata', '2ff'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedNonFungibleTokenObject',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedNonFungibleTokenObject', '03a'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig', '401'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedSimpleData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedSimpleData', '4af'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig', 'f63'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedUsageConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedUsageConfig', '9fe'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/PublicSaleConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/PublicSaleConfig', '12b'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/SimpleData',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/SimpleData', 'f01'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/TimeConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/TimeConfig', '30f'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/interfaces/UsageConfig',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/interfaces/UsageConfig', '2a9'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/modules',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/modules', '7f8'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/keypom-sdk/Selector/welcome',
        component: ComponentCreator('/docs/2.0/keypom-sdk/Selector/welcome', 'd24'),
        exact: true,
        sidebar: "TypeDocSDK"
      },
      {
        path: '/docs/2.0/TrialAccounts/Creation/drop-creation',
        component: ComponentCreator('/docs/2.0/TrialAccounts/Creation/drop-creation', 'aec'),
        exact: true,
        sidebar: "TrialAccounts"
      },
      {
        path: '/docs/2.0/TrialAccounts/Creation/getting-started',
        component: ComponentCreator('/docs/2.0/TrialAccounts/Creation/getting-started', 'ea3'),
        exact: true,
        sidebar: "TrialAccounts"
      },
      {
        path: '/docs/2.0/TrialAccounts/Creation/integration',
        component: ComponentCreator('/docs/2.0/TrialAccounts/Creation/integration', 'e87'),
        exact: true,
        sidebar: "TrialAccounts"
      },
      {
        path: '/docs/2.0/TrialAccounts/Creation/understanding-trial-accounts',
        component: ComponentCreator('/docs/2.0/TrialAccounts/Creation/understanding-trial-accounts', 'e8b'),
        exact: true,
        sidebar: "TrialAccounts"
      },
      {
        path: '/docs/2.0/TrialAccounts/introduction',
        component: ComponentCreator('/docs/2.0/TrialAccounts/introduction', '4be'),
        exact: true,
        sidebar: "TrialAccounts"
      },
      {
        path: '/docs/2.0/TrialAccounts/offboarding',
        component: ComponentCreator('/docs/2.0/TrialAccounts/offboarding', '05a'),
        exact: true,
        sidebar: "TrialAccounts"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/AccessKeyMarketplace/concept',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/AccessKeyMarketplace/concept', '033'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/AccessKeyMarketplace/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/AccessKeyMarketplace/final', '44d'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/AccessKeyMarketplace/skeleton',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/AccessKeyMarketplace/skeleton', 'eac'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/CustomizedOnboarding/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/CustomizedOnboarding/final', '2df'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/CustomizedOnboarding/introduction',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/CustomizedOnboarding/introduction', '68d'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/CustomizedOnboarding/skeleton',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/CustomizedOnboarding/skeleton', 'f35'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/daos/architecture',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/daos/architecture', '1f3'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/daos/daobot',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/daos/daobot', '298'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/daos/drop',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/daos/drop', '44a'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/daos/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/daos/final', '32d'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/daos/introduction',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/daos/introduction', '789'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/daos/security',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/daos/security', '1d8'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/homepage',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/homepage', '462'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/multi-sig/concept',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/multi-sig/concept', '7ce'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/multi-sig/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/multi-sig/final', '6d4'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/multi-sig/skeleton',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/multi-sig/skeleton', 'da0'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ReceiverContracts/concept',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ReceiverContracts/concept', '295'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ReceiverContracts/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ReceiverContracts/final', '07d'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ReceiverContracts/skeleton',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ReceiverContracts/skeleton', '57a'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/RewardGating/concept',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/RewardGating/concept', '7c8'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/RewardGating/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/RewardGating/final', '3f6'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/RewardGating/skeleton',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/RewardGating/skeleton', '0e6'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/subscriptions/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/subscriptions/final', 'd88'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/subscriptions/introduction',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/subscriptions/introduction', '21f'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/subscriptions/skeleton',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/subscriptions/skeleton', '2cc'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/analytics',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/analytics', 'dae'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/architecture',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/architecture', '53c'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/bos-tool',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/bos-tool', 'd7d'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/drop',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/drop', 'a46'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/drop-test',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/drop-test', '92e'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/final',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/final', 'f5a'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/introduction',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/introduction', '7d9'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/react-outline',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/react-outline', '929'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/scanner-code',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/scanner-code', 'bf5'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Advanced/ticketing/user-code',
        component: ComponentCreator('/docs/2.0/Tutorials/Advanced/ticketing/user-code', '1d9'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Basics/fc-drops',
        component: ComponentCreator('/docs/2.0/Tutorials/Basics/fc-drops', '18a'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Basics/ft-drops',
        component: ComponentCreator('/docs/2.0/Tutorials/Basics/ft-drops', '79d'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Basics/getting-started',
        component: ComponentCreator('/docs/2.0/Tutorials/Basics/getting-started', '0b3'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Basics/nft-drops',
        component: ComponentCreator('/docs/2.0/Tutorials/Basics/nft-drops', '36c'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Basics/simple-drops',
        component: ComponentCreator('/docs/2.0/Tutorials/Basics/simple-drops', '70d'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/BOS/welcome',
        component: ComponentCreator('/docs/2.0/Tutorials/BOS/welcome', '92f'),
        exact: true,
        sidebar: "Tutorials"
      },
      {
        path: '/docs/2.0/Tutorials/Misc/sign-txn',
        component: ComponentCreator('/docs/2.0/Tutorials/Misc/sign-txn', '10b'),
        exact: true
      },
      {
        path: '/docs/2.0/Tutorials/welcome',
        component: ComponentCreator('/docs/2.0/Tutorials/welcome', '03a'),
        exact: true,
        sidebar: "Tutorials"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e39'),
    routes: [
      {
        path: '/docs/DesignLog/main-log',
        component: ComponentCreator('/docs/DesignLog/main-log', '2de'),
        exact: true,
        sidebar: "DesignLog"
      },
      {
        path: '/docs/placeholder',
        component: ComponentCreator('/docs/placeholder', '5ce'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '116'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
