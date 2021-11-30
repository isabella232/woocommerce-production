<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcf33687153484e76b181efc74c91a32c
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
        'A' => 
        array (
            'Automattic\\WooCommerce\\Admin\\' => 29,
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'Automattic\\WooCommerce\\Admin\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcf33687153484e76b181efc74c91a32c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcf33687153484e76b181efc74c91a32c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitcf33687153484e76b181efc74c91a32c::$classMap;

        }, null, ClassLoader::class);
    }
}
