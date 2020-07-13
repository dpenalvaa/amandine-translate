let lang = `fr-FR`;

let c = require(`../config.js`);
let e = c.emojis;

module.exports = class {
    constructor() {
        this.language = {
            UTILS: {
                ERROR_TITLE: `ERREUR`,
                ERROR_MESSAGE: `${e.servererror} Une erreur interne est survenue, veuillez réessayer ultérieurement.`,
                ERROR: (error) => `Voici le code d'erreur, merci de la reporter a l'équipe du staff du bot.\n\`\`\`${error}\`\`\``,
                NO_ENABLED: `${e.error} Désolé cette commande n'est pas disponible maintenant, rééssayez plus tard.`,
                STAFF_ONLY: `${e.error} Désolé cette commande est reservé a l'équipe du staff du bot.`,
                OWNER_ONLY: `${e.error} Désolé cette commande est réservé au propriétaire du serveur.`,
                NSFW: `${e.error} Désolé mais ceci est une commande de contenu NSFW, elle doit donc être effectuée dans un canal NSFW.`,
                NO_PERMISSION_CLIENT: (permission) => `${e.error} Je n'ai pas la/les permission(s) suivantes : \n\`\`${permission}\`\``,
                NO_PERMISSION_USER: (permission) => `${e.error} Vous n'avez pas la/les permission(s) suivantes : \n\`\`${permission}\`\``,
                NO_GUILD_PREMIUM: `${e.error} Désolé, cette commande est uniquement pour les serveurs premium.`,
                NO_PREMIUM_HOW_TO: `Pour avoir le premium...`,
                NOT_FOUND: `${e.error} Désolé, cette commande n'existe pas.`,
                SLOWMODE: (slowmode, command) => `${e.time} Vous devez patienter ${slowmode} seconde(s) avant de pouvoir éxécuter la commande \`\`${command}\`\` de nouveau.`,
                ENABLED: `${e.success} Activé`,
                DISABLED: `${e.error} Désactivé`,
                NOT_DEFINED: `${e.error} Non défini`,
                NONE: `${e.error} Aucun`,
				DEFAULT_PREFIX: (prefix) => `Hey, mon prefix sur ce serveur est \`\`${prefix}\`\``,
				MONTHS_SHORT: [
					`Janv`,
					`Fév`,
					`Mars`,
					`Avr`,
					`Mai`,
					`Juin`,
					`Juillet`,
					`Août`,
					`Sept`,
					`Oct`,
					`Nov`,
					`Déc`
				],
            },
            EVENTS: {
                CHANNEL_CREATE: ``,
                CHANNEL_DELETE: ``,
                CHANNEL_UPDATE: ``,
                EMOJI_CREATE: ``,
                EMOJI_DELETE: ``,
                EMOJI_UPDATE: ``,
                GUILD_CREATE: ``,
                GUILD_DELETE: ``,
                GUILD_MEMBER_ADD: ``,
                GUILD_MEMBER_REMOVE: ``,
                GUILD_MEMBER_UPDATE: ``,
                GUILD_UPDATE: ``,
                INVITE_CREATE: ``,
                INVITE_DELETE: ``,
                MESSAGE_DELETE: ``,
                MESSAGE_UPDATE: ``,
                ROLE_CREATE: ``,
                ROLE_DELETE: ``,
                ROLE_UPDATE: ``,

            },
            HELP: {
                DESCRIPTION: `Permet d'obtenir la page d'aide du bot et une aide pour les commandes`,
                USAGE: `$help`,
                EXAMPLES: `$help`,
                HEADINGS: [
                    `Aide pour la commande : `,
                    `${e.desc2} Description :`,
                    `${e.folder} Catégorie :`,
                    `${e.help} Usage :`,
                    `${e.search} Exemples :`,
                    `${e.add} Alias :`,
                    `${e.crown} Permissions :`,
                    `Bot`,
                    `Utilisateur`,
                    `Voici la liste des commandes disponibles :`,
                ],
                FOOTER: (username) => `${username} | Version : ${c.version}`,
            },
            CATEGORIES: {
                ADMINSTRATION: `Administration`,
                MODERATION: `Modération`,
                BOT: `Infos du bot`,
                CONFIGURATION: `Configuration`,
                INVITES: `Invitation`,
                MANAGEMENT: `Gestion`,
                STAFF: `STAFF`,
            },
            ADDBOT: {
                DESCRIPTION: `Permet d'obtenir le lien d'invitation du bot.`,
                USAGE: `$addbot`,
                EXAMPLES: `$addbot`,
                TITLE: `Voici les liens pour inviter notre chère Amandine.`,
                CLICK: `Cliquez ici.`,
                NO_PERM: `Aucune permissions.`,
                MEMBER_PERM: `Permissions Membre.`,
                MOD_PERM: `Permissions Modération.`,
                ADMIN_PERM: `Permissions Administration.`,
            },
            BOTINFOS: {
                DESCRIPTION: `Affiche les informations sur le bot.`,
                USAGE: `$botinfos`,
                EXAMPLES: `$botinfos`,
                TITLE: (botname) => `**__Statistique d'${botname}__**`,
                OWNER: `${e.crown} | Propriétaire`,
                VERSION: `${e.bot} | Version du bot`,
                DATE: `${e.calendar} | Date de création`,
                USERS: `${e.users} | Utilisateurs`,
                GUILDS: `${e.server} | Serveurs`,
                CHANNELS: `${e.channels} | Canaux`,
                PING: `${e.latency} | Latence`,
                RAM: `${e.ram} | Mémoire vive`,
                UPTIME: `${e.time} | Temp depuis le dernier redémarrage`,
                CURRENT: `_Actuel`,
            },
            MYCOLOR: {
                DESCRIPTION: `Permet de choisir la couleur des embeds du bot.`,
                USAGE: `$mycolor <couleur hexadecimale>`,
                EXAMPLES: `$mycolor #FFFFFF\n$mycolor reset`,
                RESET: `${e.success} Votre couleur a bien été réinitialisé sur \`\`Aléatoire\`\`.`,
                MOREINFOS: `Cliquez ici pour plus d'infos.`,
                NO_ARGS: `${e.error} Merci de spécifier une couleur hexadécimale.`,
                NO_HEX: `${e.error} Ce n'est pas une couleur hexadécimale valide.`,
                SUCCESS: (color) => `${e.success} Votre couleur a bien ete changée en \`\`${color}\`\``,
            },
            PING: {
                DESCRIPTION: `Permet de voir la latence du bot et de l'API de discord.`,
                USAGE: `$ping`,
                EXAMPLES: `$ping`,
                FETCHING: `${e.loading} Calcul en cours...`,
                SLOW: `Le bot est lent.`,
                FAST: `Le bot est rapide.`,
                PING: (api, bot, hint) => `${e.server} API : ***${api}*** ms\n${e.bot} BOT : ***${bot}*** ms\n\n${hint}` //\n:rofl: Base de données : ${db}
            },
            INFOCONFIG: {
                DESCRIPTION: `Permet de voir la configuration actuelle des paramètres du bot pour le serveur.`,
                USAGE: `{prefixes}configuration [logs]`,
                EXAMPLES: ``,
                TITLE_BASE: `**Voici les paramètres principaux du serveur.**`,
                PREFIX: `**Préfix :**`,
                LANG: `**Langue :**`,
                JOIN_MSG_STATE: `**État du message de bienvenue :**`,
                LEAVE_MSG_STATE: `**État du message de départ :**`,
                NO_CHANNEL: `Le canal n'est pas configuré ou est invalide.`,
                NO_MESSAGE: `Le message n'est pas configuré`,
                JOIN_CHANNEL: `**Canal de bienvenue :**`,
                LEAVE_CHANNEL: `**Canal de départ :**`,
                JOIN_MSG: `**Message de bienvenue :**`,
                LEAVE_MSG: `**Message de départ :**`,
                LOGS_LIST: `**Voici les paramètres des logs du serveur.**`,
                LOGS_STATE: `**État des logs :**`,
                LOGS_CHANNEL: `**Canal de logs :**`,
                NO_LOGS_CHANNEL: `Le canal n'est pas configuré ou est invalide.`,
                LOGS_TIP: `Détails des logs "{prefixes}configuration logs"`,
                LOGS_DETAILS: `Liste détaillée des logs.`,
            },
            LOGGING: {
                DESCRIPTION: `Permet de définir quels logs vous voulez activer ou non.`,
                USAGE: `$logging <paramètre> <on/off>`,
                EXAMPLES: `$logging messageUpdate on\n$logging guildUpdate off\n$logging all on\n$logging channel #canal\n$logging off`,
                LIST: `**Voici la liste des logs configurables.**`,
                NO_PARAM: `${e.error} Merci de spécifier un log a configurer.`,
                NO_STATUS: `${e.error} Merci de spécifier un status : on/off.`,
                INVALID: `${e.error} Ce log est inavlide.`,
                ALREADY_ENABLED: `${e.error} Ce log est déjà activé.`,
                LOG_ENABLED: (log) => `${e.success} Le log ${log} a bien été activé.`,
                ALREADY_DISABLED: `${e.error} Ce log est déjà désactivé.`,
                LOG_DISABLED: (log) => `${e.success} Le log ${log} a bien été activé.`,
                ALL_ENABLED: `${e.success} Tout les logs ont bien été activés.`,
                ALL_DISABLED: `${e.success} Tout les logs ont bien été désactivés.`,
                ENABLED: `${e.success} Les logs on bien été activés.`,
                DIASBLED: `${e.success} Les logs ont bien été désactivé.`,
                INVALID_CHANNEL: `${e.error} Merci de spécifier un canal valide sur le serveur.`,
                SUCCESS_CHANNEL: `${e.success} Le canal de logs a bien été configuré`,
                INVALID_OR_NULL_CHANNEL: `${e.error} Merci de vérifier que vous avez bien configuré un canal de logs ou que celui que vous avez configuré est valide avant d'activer les logs.`,
                NO_PERM: `${e.error} Merci de me donner la permission d'envoyer des messages dans ce canal ou d'en spécifier un autre.`
            },
            CONFIGURATION: {
                DESCRIPTION: `Permet de voir la configuration actuelle sur le serveur.`,
                USAGE: `$configuration <option>`,
                EXAMPLES: `$configuration\n$configuration logs`,
                LOG_TITLE: `Voici la configuration des logs sur ce serveur.`,
                LOG_STATUS: `État des logs :`,
                LOG_CHANNEL: `Canal de log :`,
                LOG_ACTIVE: `Logs activés :`,
                LOG_INACTIVE: `Logs désactivés`,
                INFO: `Voici la configuration actuelle du serveur`,
                PREFIX: `Préfixe`,
                LANG: `Langue`,
                CLEANIFY: `Mode propreté`,
                JOINMSGISON: `État du message de bienvenue`,
                LEAVEMSGISON: `État du message d'au revoir`,
                JOINCHANNEL: `Canal de bienvenue`,
                LEAVECHANNEL: `Canal d'au revoir`,
                JOINMSG: `Message de bienvenue`,
                LEAVEMSG: `Message d'au revoir`,
            },
            BACKUP: {
                DESCRIPTION: `Permet de créer des sauvegarde de vos serveurs.`,
                USAGE: `$backup <option> [nom]`,
                EXAMPLES: `$backup create nom\n$backup load nom\n$backup infos nom\n$backup remove nom\n$backup list`,
                USER_LIMIT_REACHED: `${e.success} Vous avez atteint la limite de sauvegardes en tant qu'utilisateur. Pour en obtenir plus merci de vous rendre sur le dashboard pour souscrire a un abonnement premium.`,
                PRIME_LIMIT_REACHED: `${e.success} Vous avez atteint la limite maximale de sauvegardes, vous pouvez toujours en demander quelques-une de plus sur le serveur de support.`,
                NO_NAME: `${e.error} Merci de spécifier un nom pour la sauvegarde.`,
                ENTRY_ALREADY_EXIST: `${e.success} Il y a déjà une sauvegarde enregistrée avec ce nom.`,
                NO_ENTRY: `${e.error} Il n'y a aucune sauvegarde enregistrée avec ce nom.`,
                START_BACKUP_SAVE: `${e.loading} La sauvegarde a commencé, merci de patienter.`,
                BACKUP_SAVE_DONE: `${e.success} La sauvegarde est terminée. Vous pouvez maintenant la charger la ou vous voulez.`,
                ROLE_NOT_HIGHEST: `${e.success} Merci de vérifier que mon rôle est tout en haut de liste et que j'ai permissions maximale pour pouvoir charger la sauvegarde.`,
                START_BACKUP_LOAD_CONFIRM: `Merci de confirmer que vous êtes sûr de vouloir charger la sauvegarde, tout sera suprimmé du serveur. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
                START_BACKUP_LOAD: `${e.loading} La sauvegarde est en cours d'installation sur le serveur.`,
                BACKUP_LOAD_CANCEL: `${e.error} L'installation de la sauvegarde a été annulée.`,
                BACKUP_LOAD_DONE: `${e.success} La sauvegarde a bien été installée, profitez bien de votre serveur tout neuf.`,
                LOAD_TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez charger la sauvegarde.`,
                INFOS_TITLE: `Informations sur la sauvegarde.`,
                INFOS_NAME: `Nom :`,
                INFOS_ID: `ID :`,
                INFOS_SERVER_NAME: `Nom du serveur :`,
                INFOS_SERVER_ID: `ID du serveur :`,
                INFOS_SIZE: `Taille :`,
                INFOS_DATE: `Date de création :`,
                BACKUP_DELETE_CONFIRM: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir suprimmer la sauvegarde. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
                BACKUP_DELETE_CANCEL: `${e.error} La supression de la sauvegarde a été annulée.`,
                BACKUP_DELETE_DONE: `${e.success} La sauvegarde a bien été suprimmée.`,
                DELETE_TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez suprimmer la sauvegarde.`,
                NO_BACKUPS: `${e.error} Vous n'avez encore aucune sauvegardes de serveurs.`,
                LIST: `Voici la liste de vos sauvegardes :`,
                NO_ACTION: `${e.error} Merci de spécifier une action: create, load, infos, remove, list.`,
            },
            JOINMSG: {
                DESCRIPTION: `Permet de configurer le message et canal de bienvenue du serveur.`,
                USAGE: `$setjoin <option> <argument> `,
                EXAMPLES: `$setjoin on\n$setjoin off\n$setjoin reset\n$setjoin channel <mention>\n$setjoin message <message>\n$setjoin options`,
                OPTIONS_TITLE: `Voici les paramètres disponibles pour le message de bienvenue.`,
                OPTIONS: `{user}-La mention de l'utilisateur\n{user.name}-Le nom de l'utilisateur\n{user.tag}-Le nom+tag de l'utilisateur\n{user.createdat}-La date de création du compte de l'utilisateur\n{user.id}-L'id de l'utilisateur\n{guild}-Le nom du serveur\n{guild.count}-Le nombre de membres sur le serveur\n{inviter}-La mention de l'utilisateur qui l'a invité\n{inviter.tag}-Le nom+tag de l'utilisateur qui l'a invité\n{inviter.name}-Le nom de l'utilisateur qui l'a invité\n{inviter.id}-L'id de l'utilisateur qui l'a invité\n{inviter.invites}-Le nombre d'invitations de l'utilisateur qui l'a invité\n{invite.code}-Le code de l'invitation utilisée\n{invite.uses}-Le nombre d'utilisation de l'invitation\n{invite.url}-L'URL de l'invitation`,
                ALREADY_ENABLED: `${e.success} Le message de bienvenue est déjà activé.`,
                CHANNEL_NOT_SET: `${e.error} Impossible d'activer le message de bienvenue tant que le canal de bienvenue n'est pas configuré ou invalide.`,
                MESSAGE_NOT_SET: `${e.error} Impossible d'activer le message de bienvenue tant que le message n'est pas configuré.`,
                ENABLED: `${e.success} Le message de bienvenue a bien été activé.`,
                DISABLED: `${e.success} Le message de bienvenue a bien été désactivé.`,
                ALREADY_DISABLED: `${e.success} Le message de bienvenue est déjà désactivé.`,
                CONFIRM_RESET: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser la configuration du message de bienvenue. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
                CANCELLED: `${e.success} La réinitialisation de la configuration du message de bienvenue a été annulée.`,
                RESET_SUCCESS: `${e.success} La configuration du message de bienvenue a bien été réinitilisée.`,
                TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser la configuration du message de bienvenue.`,
                NO_MENTION: `${e.error} Merci de mentionner un canal.`,
                CHANNEL_SUCCESS: `${e.success} Le canal de bienvenue a bien été configuré.`,
                NO_ARGS_MESSAGE: (prefix) => `${e.error} Merci de spécifier un message. Vous pouvez trouver les paramètres disponibles avec ${prefix}setjoin options.`,
                NON_EXISTENT_CHANNEL: `${e.error} Impossible de configurer le message de bienvenue tant que le canal de bienvenue n'est pas configuré ou invalide.`,
                TOO_LONG: `${e.error} Votre message de bienvenue est trop long, il ne doit pas dépasser 1000 caractères.`,
                MESSAGE_SUCCESS: `${e.success} Le message de bienvenue a bien été configuré.`,
				NO_ARGS: `${e.error} Merci de spécifier une action: on, off, reset, channel, message, options.`,
				NO_PERM: `${e.error} Merci de me donner la permission d'envoyer des messages dans ce canal ou d'en spécifier un autre.`,
            },
            LEAVEMSG: {
                DESCRIPTION: `Permet de configurer le message et canal d'au revoir du serveur.`,
                USAGE: `$setleave <option> <argument> `,
                EXAMPLES: `$setleave on\n$setleave off\n$setleave reset\n$setleave channel <mention>\n$setleave message <message>\n$setleave options`,
                OPTIONS_TITLE: `Voici les paramètres disponibles pour le message d'au revoir.`,
                OPTIONS: `{user}-La mention de l'utilisateur\n{user.name}-Le nom de l'utilisateur\n{user.tag}-Le nom+tag de l'utilisateur\n{user.createdat}-La date de création du compte de l'utilisateur\n{user.id}-L'id de l'utilisateur\n{guild}-Le nom du serveur\n{guild.count}-Le nombre de membres sur le serveur\n{inviter}-La mention de l'utilisateur qui l'a invité\n{inviter.tag}-Le nom+tag de l'utilisateur qui l'a invité\n{inviter.name}-Le nom de l'utilisateur qui l'a invité\n{inviter.id}-L'id de l'utilisateur qui l'a invité\n{inviter.invites}-Le nombre d'invitations de l'utilisateur qui l'a invité\n{invite.code}-Le code de l'invitation utilisée\n{invite.uses}-Le nombre d'utilisation de l'invitation\n{invite.url}-L'URL de l'invitation`,
                ALREADY_ENABLED: `${e.success} Le message d'au revoir est déjà activé.`,
                CHANNEL_NOT_SET: `${e.error} Impossible d'activer le message d'au revoir tant que le canal d'au revoir n'est pas configuré ou invalide.`,
                MESSAGE_NOT_SET: `${e.error} Impossible d'activer le message d'au revoir tant que le message n'est pas configuré.`,
                ENABLED: `${e.success} Le message d'au revoir a bien été activé.`,
                DISABLED: `${e.success} Le message d'au revoir a bien été désactivé.`,
                ALREADY_DISABLED: `${e.success} Le message d'au revoir est déjà désactivé.`,
                CONFIRM_RESET: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser la configuration du message d'au revoir. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
                CANCELLED: `${e.success} La réinitialisation de la configuration du message d'au revoir a été annulée.`,
                RESET_SUCCESS: `${e.success} La configuration du message d'au revoir a bien été réinitilisée.`,
                TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser la configuration du message d'au revoir.`,
                NO_MENTION: `${e.error} Merci de mentionner un canal.`,
                CHANNEL_SUCCESS: `${e.success} Le canal d'au revoir a bien été configuré.`,
                NO_ARGS_MESSAGE: (prefix) => `${e.error} Merci de spécifier un message. Vous pouvez trouver les paramètres disponibles avec ${prefix}setleave options.`,
                NON_EXISTENT_CHANNEL: `${e.error} Impossible de configurer le message d'au revoir tant que le canal d'au revoir n'est pas configuré ou invalide.`,
                TOO_LONG: `${e.error} Votre message d'au revoir est trop long, il ne doit pas dépasser 1000 caractères.`,
                MESSAGE_SUCCESS: `${e.success} Le message d'au revoir a bien été configuré.`,
				NO_ARGS: `${e.error} Merci de spécifier une action: on, off, reset, channel, message, options.`,
				NO_PERM: `${e.error} Merci de me donner la permission d'envoyer des messages dans ce canal ou d'en spécifier un autre.`,
            },
            PREFIX: {
                DESCRIPTION: `Permet de configurer le préfixe du bot sur le serveur.`,
                USAGE: `$prefix <nouveau préfixe>`,
				EXAMPLES: `$prefix !!\n$prefix ?`,
				NO_ARGS: `${e.error} Merci de spécifier un nouveau prefixe.`,
				SUCCESS: (prefix) => `${e.success} Le nouveau préfixe est maintenant: ${prefix}`,
            },
            LANG: {
                DESCRIPTION: `Permet de configurer la langue du bot.`,
                USAGE: `$lang <langue>`,
				EXAMPLES: `$lang english\n$lang fr-FR`,
				NO_ARGS: (langs) => `${e.error} Merci de spécifier une langues. Voici celles disponibles: ${langs}`,
				INVALID_LANG: (langs) => `${e.error} Merci de spécifier une langue valide. Voici celles disponibles: ${langs}`,
				SUCCESS: (lang) => `${e.success} La langue du bot est mainenant configuré sur: ${lang}`,
            },
            ADDBONUS: {
                DESCRIPTION: `Permet d'ajouter des invitations bonus a un utilisateur.`,
                USAGE: `$addbonus <quantité> @membre1 @membre2 ....`,
				EXAMPLES: `$addbonus 10 @Mr¤KayJayDee @Alex`,
				NO_ARGS: `${e.error} Merci de spécifier une quantité a ajouter.`,
				ARGS_IS_NAN: `${e.error} Merci de vérifier la quantité spécifiée. Notez qu'elle ne peut pas être negative et ne doit pas depasser 100.`,
				NO_MENTION: `${e.error} Merci de mentionner un membre.`,
				SUCCESS: `${e.success} Le/les membres a/ont reçu leur bonus. Notez que les membres blacklisté ont été ignorés.`,
			},
			CLEARINVITES: {
				DESCRIPTION: `Permet de suprimmer toutes les invitations d'un membre ou de tout les membres.`,
				USAGE: `$clearinvites [@membre]`,
				EXAMPLES: `$clearinvites @Mr¤KayJayDee`,
				CONFIRM_ALL: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser les invitations de tout les membres du serveur. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				CONFIRM_MEMBER: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser les invitations du/des membre(s) mentionné(s). Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				CANCELLED_ALL: `${e.error} La réinitialisation des invitations de tout les membres a été annulée.`,
				CANCELLED_MEMBER: `${e.error} La réinitialisation des invitations du/des membre(s) mentionné(s) a été annulée.`,
				SUCCESS_ALL: `${e.success} Les invitations de tout les membres ont bien été réinitialisées.`,
				SUCCESS_MEMBER: `${e.success} Les invitations du/des membres mentionné(s) ont bien été réinitialisées.`,
				TIMEOUT_ALL: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser les invitations de tout les membres du serveur.`,
				TIMEOUT_MEMBER: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser les invitations du/des membre(s) mentionné(s).`,
			},
			FETCHINVITES: {
				DESCRIPTION: `Permet de detecter les nouvelles invitations non enregistrée dans le cache.`,
				USAGE: `$fetchinvites`,
				EXAMPLES: `$fetchinvites`,
				SUCCESS: `${e.success} Les invitations ont bien été actualisées.`,
			},
			INVITEBLACKLIST: {
				DESCRIPTION: `Permet de blacklister un membre du système d'invitations.`,
				USAGE: `$inviteblacklist <option> [@membre]`,
				EXAMPLES: `$inviteblacklist add @membre\n$inviteblacklist remove @membre\n$inviteblacklist list`,
				NO_MENTION: `${e.error} Merci de mentionner un membre.`,
				ALREADY_BLACKLISTED: `${e.error} Ce membre est déja blacklisté.`,
				ADD_SUCCESS: `${e.success} Ce membre a bien été ajouté a la blackliste. `,
				NOT_BLACKLISTED: `${e.error} Ce membre n'est pas blacklisté.`,
				REMOVE_SUCCESS: `${e.success} Ce membre a bien été retiré de la blackliste.`,
				NO_BLACKLISTED_USER: `${e.error} Il n'y a aucun utilisateur blacklisté.`,
				NO_ARGS: `${e.error} Merci de spécifier une action: add, remove, list`,
				LIST: `Voici la liste des utilisateurs blacklistés`,
			},
			INVITERANK: {
				DESCRIPTION: `Permet de configurer les rôles récompenses d'invitations`,
				USAGE: `$inviterank <option> <nombre d'invitations> @role`,
				EXAMPLES: `$inviterank add 10 @Amandine-Lover\n$inviterank remove @Amandine-Lover`,
				NO_ARGS_INVITE: `${e.error} Merci de spécifier un nombre d'invitations.`,
				IS_NAN: `${e.error} Merci de spécifier un nombre valide.`,
				ALREADY_RANK_FOR_INVITE: `${e.error} Il y à déjà un role pour ce nombre d'invitations.`,
				NO_ROLE_MENTION: `${e.error} Merci de mentionner un rôle.`,
				INVALID_OR_MANAGED: `${e.error} Merci de verifier que le rôle que vous avez mentionné est valide.`,
				ALREADY_INVITE_FOR_RANK: `${e.error} Il y à déjà un un nombre d'invitations pour ce rôle.`,
				ADD_SUCCESS: `${e.success} Le rôle a bien été ajouté.`,
				NO_ROLE_FOUND: `${e.error} Il n'y a aucun rôle de ce nom configuré sur le serveur.`,
				REMOVE_SUCCESS: `${e.success} Le rôle a bien été retiré.`,
				NO_ARGS: `Merci de spécifier une action: add, remove.`
			},
			INVITERANKS: {
				DESCRIPTION: `Permet de voir les rôles récompenses d'invitations du serveur.`,
				USAGE: `$inviteranks`,
				EXAMPLES: `$inviteranks`,
				NO_RANKS: `${e.error} Il n'y a aucun rôle configuré sur le serveur.`,
				DELETED: (invite) => `${e.error} Le rôle assigné a ${invite} invitations a été suprimmé et n'est plus accessible.\n`,
				RANKS: (role, invite) => `${role} (**${invite}** invitations)\n`,
				RANK: `Voici les rôles disponible`,
			},
			INVITES: {
				DESCRIPTION: `Permet de voir vos invitations ou celles d'un amis.`,
				USAGE: `$invites`,
				EXAMPLES: `$invites`,
				BLACKLISTED: `${e.error} Vous êtes blacklisté sur ce serveur, veuillez contacter un Modérateur/Administrateur.`,
				INVITES: (member, memberData, isYou, nextRank, role) => `${isYou ? `Vous avez` : `**${member.user.username}** a`} **${memberData.calcInvites()}** invitations! (**${memberData.invites}** ordinaires, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** faux, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** partis)${nextRank ? `\nIl ${isYou ? `vous` : `lui`} faut encore **${nextRank.inviteCount - memberData.calcInvites()}** invitations pour obtenir le rôle **${role}** !` : ``}`,
			},
			JOINSTATS: {
				DESCRIPTION: `Affiche un graphique avec les statistiques des membres qui ont rejoint le serveur.`,
				USAGE: `$joinsstats`,
				EXAMPLES: `$joinsstats`,
				INVALID: `${e.error} Merci de spécifier un nombre valide. Entre 1 et 1000`,
				TITLE: (name, numberOfDays) => `Statistiques de ${name} depuis ${numberOfDays} jours.`,
				PERCENT: (total, percent) => `${total} ont rejoint, soit ${percent}% du serveur.`,
				RANGE: (dayRange1, dayRange2) => `Statistiques du ${dayRange1} au ${dayRange2}`
			},
			SETKEEP: {
				DESCRIPTION: `Permet de configurer si les membres gardent leur rôles même si il n'ont pls assez d'invitations.`,
				USAGE: `$setkeep`,
				EXAMPLES: `$setkeep`,
				ENABLED: `${e.success} Keeprank est maintenant activé.`,
				DISABLED: `${e.success} Keeprank est maintenant désactivé.`,
			},
			SETSTACKED: {
				DESCRIPTION: `Permet de configurer si les membres accumullet leurs rôles ou non.`,
				USAGE: `$setstacked`,
				EXAMPLES: `$setstacked`,
				ENABLED: `${e.success} Stackedrank est maintenant activé.`,
				DISABLED: `${e.error} Stackedrank est maintenant désactivé.`,
            },
            REMOVEBONUS: {
                DESCRIPTION: `Permet de retirer des invitations bonus a un utilisateur.`,
                USAGE: `$removebonus <quantité> @membre1 @membre2 ....`,
				EXAMPLES: `$removebonus 10 @Mr¤KayJayDee @Alex`,
				NO_ARGS: `${e.error} Merci de spécifier une quantité a retirer.`,
				ARGS_IS_NAN: `${e.error} Merci de vérifier la quantité spécifiée. Notez qu'elle ne peut pas être negative et ne doit pas depasser 100.`,
				NO_MENTION: `${e.error} Merci de mentionner un membre.`,
				SUCCESS: `${e.success} Le/les membres a/ont perdu leur bonus. Notez que les membres blacklisté ont été ignorés.`,
            },
            RESTOREINVITES: {
                DESCRIPTION: `Permet de restaurer les inviations après une reinitialisation de celles-ci.`,
                USAGE: `$restoreinvites [@membre]`,
                EXAMPLES: `$restoreinvites @Mr¤KayJayDee`,
                CONFIRM_ALL: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser les invitations de tout les membres du serveur. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				CONFIRM_MEMBER: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser les invitations du/des membre(s) mentionné(s). Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				CANCELLED_ALL: `${e.error} La réinitialisation des invitations de tout les membres a été annulée.`,
				CANCELLED_MEMBER: `${e.error} La réinitialisation des invitations du/des membre(s) mentionné(s) a été annulée.`,
				SUCCESS_ALL: `${e.success} Les invitations de tout les membres ont bien été réinitialisées.`,
				SUCCESS_MEMBER: `${e.success} Les invitations du/des membres mentionné(s) ont bien été réinitialisées.`,
				TIMEOUT_ALL: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser les invitations de tout les membres du serveur.`,
				TIMEOUT_MEMBER: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser les invitations du/des membre(s) mentionné(s).`,
            },
            SYNCINVITES: {
                DESCRIPTION: `Permet de synchroniser les invitations du serveur avec la base de donnée du bot.`,
                USAGE: `$syncinvites`,
                EXAMPLES: `$syncinvites`,
                NO_INVITES: `${e.success} Il n'y a aucune invitations a synchroniser.`,
                CONFIRM: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir synchroniser les invitations de tout les membres du serveur avec la base de données. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
                CANCELLED: `${e.error} La synchronisation des invitations de tout les membres a été annulée.`,
                SUCCESS: `${e.success} Les invitations de tout les membres ont bien été synchronisée.`,
                TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez synchroniser les invitations de tout les membres du serveur.`,
            },
            CONFIGCOMMAND: {
                DESCRIPTION: `Permet de configurer les commandes activées ou désactivées sur votre serveur.`,
                USAGE: `$configcommand <nom de la commande>`,
                EXAMPLES: `$configcommand help`,
                ENABLED: `${e.success} Cette commande est maintenant activée.`,
                DISABLED: `${e.error} Cette commande est maintenant désactivée.`,
            },
            GIVEAWAY: {
                DESCRIPTION: `Permet de créer et gérer des giveaways sur vos serveurs.`,
                USAGE: `$giveaway <create/edit/end/reroll/config>`,
                EXAMPLES: `$giveaway create #giveaways-hype 10m 5 A cool role color\n$giveaway edit time <id du message de giveaway> 20m\n$giveaway reroll <id du message de giveaway>\n$giveaway end <id du message de giveaway>\n$giveaway delete <id du message de giveaway>\n$giveaway config color #FF0000 (une couleur hexadécimale)\n$giveaway config endcolor #00FF00 (une couleur hexadécimale)`,
                NO_CHANNEL: `${e.error} Merci de mentionner un canal.`,
                NO_TIME: `${e.error} Merci de spécifier un temps.`,
                TIME_IS_NAN: `${e.error} Merci de spécifier un temps valide.`,
                DAY_LIMIT: ``,
                NO_WINNERS: `${e.error} Merci de spécifier un nombre de gagnants.`,
                WINNERS_IS_NAN: `${e.error} Merci de spécifier un nombre de gagnants valide.`,
                TOO_MANY_WINNERS: `${e.error} Vous ne pouvez pas avoir plus de 50 gagnants.`,
                NO_PRIZE: `${e.error} Merci de spécifier un prix.`,
                PRIZE_TOO_LONG: `${e.error} Merci de spécifier un prix plus cours. (max 250 caractères)`,
                DELETED: `${e.success} Le giveaway a bien été suprimmé.`,
                NO_ID: `${e.error} Merci de spécifier l'id du message de giveaway.\n[Cliquez ce lien pour savoir comment l'obtenir](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)`,
                UPDATE: (time) => `${e.success} Le giveaway va se mettre à jour dans moins de ${time} secondes.`,
                NO_EDIT_OPTION: `${e.error} Merci de spécifier une option a modifier: time, winner, prize`,
                END: (time) => `${e.success} Le giveaway va se terminer dans moins de ${time} secondes.`,
                NO_MESSAGE_FOUND: `${e.success} Aucune message n'a été reouvé, merci de vérifier l'ID.`,
                NO_COLOR: `${e.success} Merci de spécifier une couleur.`,
                SUCCESS_COLOR: `${e.success} La couleur des giveaways à bien été mise à jour.`,
                LINK_HEX: `${e.success} Cliquez ici pour en savoir plus.`,
                NOT_HEX: `${e.error} Merci de spécifier une couleur hexadécimale.`,
                SUCCESS_END_COLOR: `${e.success} La couleur de fin des giveaways à été mise à jour.`,
                NO_CONF_OPTION: `${e.error} Merci de spécifier une options a configurer: color, endcolor.`,
                NO_OPTION: `${e.error} Merci de spécifier une action: creat, edit, reroll, end, config, delete`,
                MESSAGES: {
                    giveaway: `🎉🎉 **GIVEAWAY** 🎉🎉`,
                    giveawayEnded: `🎉🎉 **GIVEAWAY TERMINÉ** 🎉🎉`,
                    timeRemaining: `Temps restant: **{duration}**!`,
                    inviteToParticipate: `Réagissez avec 🎉 pour participer!`,
                    winMessage: `Bravo, {winners}! Vous avez gagné **{prize}**!`,
                    embedFooter: `Giveaways`,
                    noWinner: `Giveawy annulé, aucune participation valide.`,
                    hostedBy: `Par: {user}`,
                    winners: `gagnant(s)`,
                    endedAt: `Fini a`,
                    units: {
                        seconds: `secondes`,
                        minutes: `minutes`,
                        hours: `heures`,
                        days: `jours`,
                    }
                }
            },
            CLEANIFY: {
                DESCRIPTION: `Permet d'activer ou pas la supression automatique des messages du bot.`,
                USAGE: `$cleanify`,
                EXAMPLES: `$cleanify`,
                ENABLED: `${e.success} Cleanify est maintenant activé.`,
                DISABLED: `${e.error} Cleanify est maintenant désactivé.`
            },
        };
    }

    /**
     * The method to get language strings
     * @param {string} term The string or function to look up
     * @param {...*} args Any arguments to pass to the lookup
     * @returns {string|Function}
     */
    get(term, ...args) {
        //if (!this.enabled && this !== this.store.default) return this.store.default.get(term, ...args);
        const value = this.language[term];
        /* eslint-disable new-cap */
        switch (typeof value) {
            case `function`:
                return value(...args);
            default:
                return value;
        }
    }

    getLang() {
        return lang;
    }

    printDate(pdate, isLongDate) {
        let monthNames = [
            `janvier`, `février`, `mars`,
            `avril`, `mai`, `juin`, `juillet`,
            `août`, `septembre`, `octobre`,
            `novembre`, `décembre`
        ];

        let day = pdate.getDate();
        let monthIndex = pdate.getMonth();
        let year = pdate.getFullYear();
        let hour = pdate.getHours() < 10 ? `0` + pdate.getHours() : pdate.getHours();
        let minute = pdate.getMinutes() < 10 ? `0` + pdate.getMinutes() : pdate.getMinutes();

        let thedate = (isLongDate) ? day + ` ` + monthNames[monthIndex] + ` ` + year + ` à ` + hour + `h` + minute :
            day + ` ` + monthNames[monthIndex] + ` ` + year;
        return thedate;
    }

    /**
     * Parse ms and returns a string
     * @param {number} milliseconds The amount of milliseconds
     * @returns The parsed milliseconds
     */
    convertMs(milliseconds) {
        let roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
        let days = roundTowardsZero(milliseconds / 86400000),
            hours = roundTowardsZero(milliseconds / 3600000) % 24,
            minutes = roundTowardsZero(milliseconds / 60000) % 60,
            seconds = roundTowardsZero(milliseconds / 1000) % 60;
        if (seconds === 0) {
            seconds++;
        }
        let isDays = days > 0,
            isHours = hours > 0,
            isMinutes = minutes > 0;
        let pattern =
            (!isDays ? `` : (isMinutes || isHours) ? `{days} jours, ` : `{days} jours et `) +
            (!isHours ? `` : (isMinutes) ? `{hours} heures, ` : `{hours} heures et `) +
            (!isMinutes ? `` : `{minutes} minutes et `) + (`{seconds} secondes`);
        let sentence = pattern
            .replace(`{duration}`, pattern)
            .replace(`{days}`, days)
            .replace(`{hours}`, hours)
            .replace(`{minutes}`, minutes)
            .replace(`{seconds}`, seconds);
        return sentence;
    }
};