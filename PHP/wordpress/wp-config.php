<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wp');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost:8888');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '<i@PP*fWFgKeXMQLFY w{/ H^WZ9K:ANi]h &c`2/-hVwM&Dmgz|_RWG<Yu]+T~/');
define('SECURE_AUTH_KEY',  'uZa%TgO}xskCb!ag-xk3DGuVun~ WW/(@>2uR,TXieu`?zg)B`h?q%Il(u@G~%jy');
define('LOGGED_IN_KEY',    'V>G@ceX<x;Up[z{RJ[^lg#K: 4NV1R0[E#|l)!MqDG-7dZm{%Eq])MW7BO%eG</B');
define('NONCE_KEY',        'toP*a`-|t$%[`%A(e9mdBa, 0NLs6UVI>=NADp! ^_.61p;>UyGvD.[$2sH7c`(k');
define('AUTH_SALT',        'bX5AENQsTnDU[e,@V)xwdhm.8uXn*0ZcVbq(X,NEFMge/x*^/~joPTSAV?oLSvMD');
define('SECURE_AUTH_SALT', 'mL79h6mHQ$03Y|UA (Lyz$De)*=AX?;g-u#/h;>hqZ+/&[!mU?1%4l*wC&1lb6R<');
define('LOGGED_IN_SALT',   '703zh:q*O[-OMJB_%6&QlWt97jx$1l8T3Ao!PpA|f1DSyU#ZN`Uqri+w$_=M|qPj');
define('NONCE_SALT',       'uC^SyI$<G6M|Nt/@:L$Ewdg)_|7Ru,x6P^B)-^8R&x{QY_xwTNH0UgND]A@*]Gk=');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d'information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');