var $points=$(".points-link"),username=$($points[0]).data("username");$.getJSON("/peg2LwAV4vexv6w16yfAYMB9r3q63UzG/user/"+username+"/point/grid",function(e){$points.each(function(t,n){$(n).attr("aria-label","seu total de pontos é "+e.total),$(n).find(".levelMenu-header-user-points-xp-points").html(e.total)}),new PopulateGrid(username,e).populate()});