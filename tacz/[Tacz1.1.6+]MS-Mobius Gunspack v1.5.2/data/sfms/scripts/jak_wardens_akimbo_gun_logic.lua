local M = {}

function M.shoot(api)
    api:shootOnce(api:isShootingNeedConsumeAmmo())
    local cache = api:getCachedScriptData()
    local bolt_time = api:getScriptParams().bolt_time * 1000

    if (cache == nil) then
        cache = {
            shoot_mode = 0,
            shoot_left = 0,
            shoot_right = 0
        }
    end
    if (cache.shoot_mode == 0) then
        cache.shoot_left = api:getCurrentTimestamp()
        if (api:getCurrentTimestamp() - cache.shoot_right < bolt_time) then
            api:adjustShootInterval(bolt_time - (api:getCurrentTimestamp() - cache.shoot_right))
        end
        cache.shoot_mode = 1
    else
        cache.shoot_right = api:getCurrentTimestamp()
        if (api:getCurrentTimestamp() - cache.shoot_left < bolt_time) then
            api:adjustShootInterval(bolt_time - (api:getCurrentTimestamp() - cache.shoot_left))
        end
        cache.shoot_mode = 0
    end



    api:cacheScriptData(cache)
end

function M.start_bolt(api)
    -- Return true to start ticking, since there are nothing needed to be check
    return true
end

function M.tick_bolt(api)
    -- 调用缓存数据
    local cache = api:getCachedScriptData()
    -- 获取data中的数据
    local bolt_time = api:getScriptParams().bolt_time * 1000

    if (bolt_time == nil) then
        return false
    end

    if (cache ~= nil) then
        if (api:getCurrentTimestamp() - cache.shoot_left > bolt_time or api:getCurrentTimestamp() - cache.shoot_right > bolt_time) then
            if (api:removeAmmoFromMagazine(1) ~= 0) then
                api:setAmmoInBarrel(true);
            end
            return false
        else
            return true
        end
    end
end

return M