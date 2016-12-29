// namespace:
this.TY = this.TY || {};

TY.VERSION = "0";
TY.Debug = 0;

TY.inherit = function(ctor, superCtor)
{
	ctor.superClass = superCtor;
	ctor.prototype = Object.create(superCtor.prototype);
	ctor.prototype.constructor = ctor;
};
TY.extend = function(origin, add)
{
	// Don't do anything if add isn't an object
	if (!add || typeof add !== 'object')
		return origin;
	var keys = Object.keys(add);
	var i = keys.length;
	while (i--)
	{
		origin[keys[i]] = add[keys[i]];
	}
	return origin;
};

