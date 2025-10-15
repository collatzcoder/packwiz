警示：
     随着TaCZ本体的更新，各版本的附属包应用方式和适配规格有所不同，请严格注意。
     若附属包声明匹配1.1.5而不匹配1.1.4，则是可能由于其采用了新机制所致，虽仍能在1.1.4中加载，但如瞄具(Sights)的镜组间瞄准位置切换功能，其采用该功能时，会导致预期之外的筒壁遮罩与分划板(divisions)常态化显示。
     当使用附属包进行创作并公开发布时，应当在简介或评论区中标明附属包作者名（以@到或相同网站的对应账户资料页为佳）以及原始发布网页，同时不应且不得以其他形式进行分发（包括且不限于重新上传、转存等），这在原始公开分发网页中有被提及或引用，故当您使用附属包时默认遵循这些事项。您已经被正当地再次告知了。
     当使用附属包内的资产（包括且不限于模型、贴图等）进行直接使用或修改时，应当首先征求该资产原作者或原始分发者的直接同意或授权，若未经授权即对外公开之，或将严厉追责。我，AstralLin，仅代表我独立个人，支持进行二次创作的行为，但非常不认可也不支持对原创资产未经授权即使用的行为。
     特别的，针对手机(移动端)，因其固有地缺乏渲染管线，且TaCZ并非为手机端设计，故而不对手机端负任何责任，也不对手机端的使用提供任何帮助。
     若出现“无效的玩家数据”问题导致无法进入存档，系你当前端挂载数据包总量过大的问题，安装以下mod之一可以解决： Packets Fixer / XL Packet / XXL Packet，此处仅供参考。
     另外，因TaCZ开发尚不完全，侧翻组合瞄具无法实现其切换逻辑，故分立之，请有需求的用户在背包中另备其对应物品变体以供随时改装。

使用方法：
     首先，TaCZ附属包主要是以特殊格式加载的datapack(1.1.4+)或configuration(1.0.3-)类文件，少部分为mod，将在后文提及，而前者为.zip格式，此时既不是整合包，也不是mod，还不是全局数据包(datapack)，更不是资源/材质包(resourcepack)，不要用TaC的经验套用之。
     其次，当附属包未声明需要解压时，请勿解压，对于声明需要解压的，应选择“解压到当前文件夹”而非“解压到xxx文件夹中”(通常而言)，其中若有进一步的指导文件，请查阅并遵循之。
     特别的，如果在启动过程中发现该附属包出现CEN invalid问题导致无法加载，可以尝试将其解压，但是，此时应当选择与前文所述相反的解压选项。
     最后，附属包在匹配的版本范围内的TaCZ都能生效，不论版本高低，也不论forge或farbic。

     显而易见的，TaCZ附属包需要TaCZ的mod本体才能加载，且TaCZ的mod本体除forge核心外无任何必需前置(此处不讨论farbic分支)，请自行准备适合的Minecraft版本和forge版本，然后将TaCZ本体mod放入其中的mods文件夹(若为PCL2启动器，从PCL2下载该mod到指定版本亦可)启动一次，以便后续操作。

     应用匹配1.1.4版本及以后的TaCZ的附属包请遵循以下步骤：在不进行游戏时，打开你的Minecraft版本对应的目录(若为PCL2则可点击版本设置-版本文件夹按钮立即跳转；若为HMCL则可点击左侧游戏版本-浏览-游戏文件夹按钮立即跳转)，找到其中的tacz文件夹，将您从此处下载得到的压缩包移入其中，随后启动游戏，该文件夹应当与mods文件夹、config文件夹等并列，而非config/tacz文件夹。
     若其匹配1.0.3版本及以前的TaCZ的附属包，则应移入config/tacz/custom文件夹，其余操作不变；若想要在1.1.4版本及以后的TaCZ背景下使用，请放置于前述位置后启动该版本游戏并进入任意允许作弊的世界，聊天框中将提醒检测到旧版枪包是否转换新版格式，点击[转换]即可，转换完成后可以删掉旧格式包，必须重启游戏来启用转换后的新格式包，若发生未被检索到的情况，系其本身格式不严格或你错误放置的问题。
     特别地，对于mod形式(.jar格式)匹配1.1.4版本及以后的TaCZ的附属包，应放至对应版本的mods文件夹中，确保debug模式关闭的情况下，进入游戏，将会使其有效作用，在tacz文件夹创建其携带的附属包，随后可选地将该mod删除(目前删除mod不会有任何影响)。

拓展操作：
     你可以通过删除本附属包的data的某些文件夹来实现完全移除某些物品/仅移除配方的效果。
     data/tacz 文件夹内包含本附属包对TaCZ泛用tag兼容，使本附属包能供大多附属包枪械改装，通常情况下不应改动；
     data/apdf/recipes 文件夹内包含本附属包的现实拟似枪械的配方，
     data/arip/recipes 文件夹内包含本附属包的高性能虚构物品的配方，
     data/asos/recipes 文件夹内包含本附属包的现实拟似瞄具的配方，
     data/atea/recipes 文件夹内包含本附属包的现实拟似枪口装置(包括刺刀)、握把和枪托的配方；
     data/.../index 文件夹内则包含对应的物品表示核心，若想移除该系列物品，则建议直接将该文件夹的上级删除。
     

其他：
     TaCZ开发之初并未考虑farbic端，现存的farbic版TaCZ系第三方制作，后被TaCZ制作组归纳为外编，现在该第三方作者由于个人问题在可预见的将来一段时间内无法继续开发。
     TaCZ本体默认Alt+T开启游戏内配置界面，你可以在此处快捷地跳转到附属包存放文件夹、开关debug模式、设置瞄准按键逻辑、设定是否破坏玻璃、变更屏幕准星(需要将格内删空，便能看到可选配置)等，需要mod：Cloth Config API
     /tacz overwrite false，使得在进入存档和/tacz reload时不再更新包，或许当你需要修改本体包内的文件时会用到。或者装Cloth Config API这个mod默认按Alt+T进tacz配置界面把debug模式打开，再或者去本地文件里config/tacz-common.toml里把DefaultPackDebug后面的false改成true，效果相同。
     /tacz overwrite true，前者的逆操作，或许你在本体更新时会用到。overwrite为false实际上对应debug为true。

兼容性：
     TaCZ本体已兼容 Player Animator 和 Yes Steve Model，二选一，来为您提供玩家模型动画支持。
     TaCZ本体已兼容 越肩视角重制，提供第三人称屏幕准星支持。
     Leawind的第三人称视角 由第三方提供TaCZ兼容：TaCZ：Leawind's Third Person Compat。
     史诗战斗(Epic Fight) 由第三方提供TaCZ兼容：Darkster Epic Guns TaCZ + EpicFight。
     神化(Apotheosis) 由第三方提供TaCZ兼容：Apotheosis Modern Ragnarok: Zero。
     Curios 由第三方提供TaCZ兼容：TaCZ Sling。
     关于 更真实的第一人称模型 的兼容方案可见TaCZ大陆地区公开附属包名录。

TaCZ本体现有附属mod(mod形式附属包除外)：
     Enchanted Arsenal，新添TaCZ所有武器可用的十个附魔，其中有两个为诅咒。
     Bullet Proof Enchant，新添针对TaCZ的特化保护附魔。
     TaC: Zero x Create: Precise Manufacturing，可使TaCZ部分物品流水线化生产。
     Create: Arms Race，可使TaCZ部分物品流水线化生产。
     Create: TacZ Automation，可使TaCZ及部分附属包中的弹药流水线化生产。
     TACZ: Durability，添加耐久与故障机制。
     TACZ：Npcs，添加多种持枪MOB。
     TaCZ：Chamber Clarity，添加检视时的余弹提示。
     
TaCZ相关mod：
     TACZ：Plus，新添战术动作等。
     TACtical Movement，前者的轻量版。
     Tactical Curios，防弹护具。
     Stims and Stuff，插板背心和激素针。
     